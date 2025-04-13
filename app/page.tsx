import React from "react";
import ClientWord from "./components/ClientWord";

const Home: React.FC = () => {
  const words = [
    "portfolio",
    "server",
    "node",
    "arena",
    "dungeon",
    "lobby",
    "environment",
    "home",
    "interface",
  ];

  return (
    <main className="p-8 font-body">
      <h1 className="mb-8 text-4xl">👋🏼 Hey, I&apos;m Wassim.</h1>
      <p className="mb-6 text-base">
        Welcome to my{" "}
        <ClientWord
          initial="portfolio"
          words={words}
          className="cursor-pointer underline transition-all duration-200 ease-in-out hover:text-nice-blue"
        />
        !
      </p>
      <p className="mb-6 text-base">
        I&apos;m a Senior Machine learning Engineer based in Paris, graduated
        from ENSTA & Ecole Potechnique (X)
      </p>
      <p className="mb-6 text-base">
        Actively, I am building a copilot for hotel reservation management based
        on tools like Django, Langchain, Docker, pgvector.
      </p>
      <p className="mb-6 text-base">
        When I&apos;m not clicking on virtual heads 🎮 and improving myself 💪🏼,
        I dive into the engineering rabbit hole 🕳️.
      </p>

      <p>
        Contact me at{" "}
        <a
          href="mailto:wassim.abida14@gmail.com"
          className="underline transition-colors duration-200 ease-in-out hover:text-nice-blue"
        >
          wassim.abida14@gmail.com
        </a>
        .
      </p>
    </main>
  );
};

export default Home;
