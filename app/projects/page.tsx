import React from "react";
import Link from "next/link";

const projects = [
  {
    title: "Fromzero2ai",
    desc: "A bootstrap repository for dockerized API, streamlit and math engine.",
    link: "https://github.com/WassimAbida/fromzero2ai-website",
  },

  {
    title: "Audiostream",
    desc: "A transcription streaming engine for Quran based on Wav2Vec model from HuggingFace.",
    link: "https://github.com/WassimAbida/audiostream",
  },
];

const Projects: React.FC = () => {
  return (
    <div>
      <main className="p-8 font-body">
        <h4 className="mb-6 animate-slideDown text-3xl font-semibold">
          🔨 A list of my engineering masterpieces.
        </h4>
        <hr className="my-4 border-t-2 border-body-light-grey" />
        {projects.map((project, index) => (
          <div key={index}>
            <a
              href={project.link}
              className="cursor-pointer text-base font-bold underline transition-all duration-200 ease-in-out hover:text-nice-blue"
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.title}
            </a>
            <p className="mb-4 text-base">{project.desc}</p>
          </div>
        ))}
        <Link
          href="/"
          className="cursor-pointer font-bold underline transition-all duration-200 ease-in-out hover:text-nice-blue"
        >
          Portfolio
        </Link>
        <p className="mb-4">
          This website! Describes myself and lists my works.
        </p>
      </main>
    </div>
  );
};

export default Projects;
