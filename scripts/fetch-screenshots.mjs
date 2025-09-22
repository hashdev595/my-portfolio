#!/usr/bin/env node
// Usage:
// node scripts/fetch-screenshots.mjs "<project name>" "<app store or play store url>"
// Saves images to public/images/projects/<slug>-<n>.jpg

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import fetch from 'node-fetch';
import { load as cheerioLoad } from 'cheerio';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const toSlug = (name) => name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

async function main() {
  const [projectName, url] = process.argv.slice(2);
  if (!projectName || !url) {
    console.error('Usage: node scripts/fetch-screenshots.mjs "<project name>" "<store url>"');
    process.exit(1);
  }

  const slug = toSlug(projectName);
  const outDir = path.resolve(__dirname, '../public/images/projects');
  fs.mkdirSync(outDir, { recursive: true });

  console.log(`Fetching screenshots for ${projectName} from ${url}`);
  const res = await fetch(url, {
    headers: {
      'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36'
    }
  });
  if (!res.ok) {
    console.error('Failed to fetch page:', res.status, res.statusText);
    process.exit(1);
  }
  const html = await res.text();

  const $ = cheerioLoad(html);
  const isPlay = url.includes('play.google.com');
  const isAppStore = url.includes('apps.apple.com');

  let imageUrls = [];

  if (isPlay) {
    // Play Store: screenshots are in <img srcset> with 512w/1024w variants under meta itemprop=image or within figure/img
    $('img[srcset]').each((_, el) => {
      const srcset = $(el).attr('srcset') || '';
      const parts = srcset.split(',').map(s => s.trim().split(' ')[0]).filter(Boolean);
      const best = parts[parts.length - 1];
      if (best && best.includes('https://play-lh')) imageUrls.push(best);
    });
  } else if (isAppStore) {
    // App Store: look for picture/source or img with itemprop="screenshot"
    $('source[srcset], img[srcset], img').each((_, el) => {
      const srcset = $(el).attr('srcset');
      const src = $(el).attr('src');
      const pick = (srcset ? srcset.split(',').map(s => s.trim().split(' ')[0]).pop() : src) || '';
      if (pick.includes('mzstatic.com') && (pick.includes('source') || pick.includes('screenshot') || pick.endsWith('.jpg') || pick.endsWith('.png'))) {
        imageUrls.push(pick);
      }
    });
  }

  // Deduplicate and limit to first 8
  imageUrls = Array.from(new Set(imageUrls)).slice(0, 8);

  if (imageUrls.length === 0) {
    console.error('No screenshots found. The store page structure may have changed.');
    process.exit(1);
  }

  console.log(`Found ${imageUrls.length} images. Downloading...`);
  let index = 1;
  for (const imgUrl of imageUrls) {
    const resp = await fetch(imgUrl);
    if (!resp.ok) {
      console.warn('Failed:', imgUrl);
      continue;
    }
    const buf = await resp.arrayBuffer();
    const file = path.join(outDir, `${slug}-${index}.jpg`);
    fs.writeFileSync(file, Buffer.from(buf));
    console.log('Saved', path.relative(path.resolve(__dirname, '..'), file));
    index++;
  }
  console.log('Done.');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});


