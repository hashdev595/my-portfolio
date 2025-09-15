export default function Header() {
    return (
      <header className="bg-secondary text-accent py-10 text-center shadow-md">
        <h1 className="text-4xl font-bold">Hashim Ali</h1>
        <p className="text-lg">Sr. React Native Developer</p>
        <p className="mt-2">
          📍 Lahore | ✉️{" "}
          <a
            href="mailto:hashimalee2651999@gmail.com"
            className="underline hover:text-gray-300"
          >
            hashimalee2651999@gmail.com
          </a>{" "}
          | 📞 +92-3000326595
        </p>
      </header>
    );
  }
  