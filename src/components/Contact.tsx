export default function Contact() {
    return (
      <section className="py-12">
        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">
          Contact
        </h2>
        <p className="text-primary-300">
          I’m always open to discussing new projects, collaborations, or
          opportunities. Feel free to reach out!
        </p>
        <div className="mt-4">
          <p>
          ✉️{" "}
            <a
              href="mailto:hashimalee2651999@gmail.com"
              className="text-blue-400 hover:underline"
            >
              hashimalee2651999@gmail.com
            </a>
          </p>
          <p>📞 +92-3000326595</p>
          <p>📍 Lahore, Pakistan</p>
        </div>
      </section>
    );
  }
  