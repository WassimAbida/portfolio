import React from "react";
import ClientWord from "../components/ClientWord";
import ClientTechView from "../components/ClientTechView";

const About: React.FC = () => {
  const titlewords = [
    "Documentation",
    "Outline",
    "Summary",
    "Rundown",
    "Synopsis",
    "Overview",
  ];
  const computerwords = [
    "tech support",
    "digital guru",
    "computer expert",
    "IT guy",
    "sysadmin",
    "technician",
    "scientist",
  ];
  const bucketlist = [
    "visit 195 countries 🌍",
    "go skydiving 🪂",
    "start a business 💼",
    "change the world 🌐",
    "create equality 🤝🏼",
    "learn more languages 🔊",
    "increase discipline 😶",
    "run marathons 🏃🏼‍♂️",
    "climb more mountains 🏔",
  ];
  const title2words = ["Presently", "Recently", "Nowadays", "Lately"];
  const techwords = ["Technology", "Stacks", "Services", "Tools"];
  const learningwords = [
    "software design",
    "data structures",
    "algorithims",
    "discrete math",
    "operating systems",
    "databases",
    "machine learning",
    "networking",
    "Orchestration",
    "Multiprocessing",
    "embedded programming",
    "LLMs",
    "statistics",
  ];
  const title3words = [
    "Additionally",
    "Furthermore",
    "Moreover",
    "Finally",
    "Also",
    "In Conclusion",
  ];
  return (
    <main className="p-8 font-body">
      <span className="text-3xl">📝</span>{" "}
      <ClientWord
        initial="Documentation"
        words={titlewords}
        className="cursor-pointer text-3xl underline transition-all duration-200 ease-in-out hover:text-nice-blue"
      />
      <p className="mt-8 text-lg">
        For as long as I can remember, I&apos;ve always been the{" "}
        <ClientWord
          initial="middle kid"
          words={computerwords}
          className="cursor-pointer underline transition-all duration-200 ease-in-out hover:text-nice-blue"
        />{" "}
        in my family 💻. Honestly, I have to give credit to gaming for starting
        me off.
      </p>
      <p className="mb-8 mt-6 text-lg">
        Of course, I exist outside of tech. I love doing more than watching,
        leading more than following. I learn through application and live off
        logic. In the future, I hope to{" "}
        <ClientWord
          initial="visit 195 countries 🌍"
          words={bucketlist}
          className="cursor-pointer underline transition-all duration-200 ease-in-out hover:text-nice-blue"
        />
        .
      </p>
      <span className="text-3xl">🔧</span>{" "}
      <ClientWord
        initial="Skills"
        words={techwords}
        className="p- cursor-pointer text-3xl underline transition-all duration-200 ease-in-out hover:text-nice-blue"
      />
      <p className="mt-8 text-lg">
        I&apos;m quite the multi-disciplinary engineer having dabbled in all the
        fun stuff:
      </p>
      <div className="mb-8">
        <ClientTechView />
      </div>
      <span className="text-3xl">📌</span>{" "}
      <ClientWord
        initial="Currently"
        words={title2words}
        className="cursor-pointer text-3xl underline transition-all duration-200 ease-in-out hover:text-nice-blue"
      />
      <p className="mt-8 text-lg">
        I&apos;m a leading a machine learning team at Mindee, our missions
        include maintating a scalable inference stack for serving AI models
        behind multiple API-based product, building internal tools for
        monitoring, load testing & data science experimentation. I&apos;m
        actively learning all the incredible in&apos;s and out&apos;s of{" "}
        <ClientWord
          initial="software design"
          words={learningwords}
          className="cursor-pointer underline transition-all duration-200 ease-in-out hover:text-nice-blue"
        />{" "}
        💻.
      </p>
      <p className="mt-6 text-lg">
        Whenever I manage to find time in my engineering schedule, I love
        joining clubs and contributing in large competitions like:
      </p>
      <ul className="mb-8 mt-4 list-inside list-disc space-y-1 pl-8 text-lg">
        <li>
          <a
            href="https://www.connectbycnes.fr/en/actinspace"
            className="underline transition-colors duration-200 ease-in-out hover:text-nice-blue"
          >
            Act in space
          </a>{" "}
          by Connect by Cnes & ESA
        </li>
        <li>
          {" "}
          Quantum hackathons by{" "}
          <a
            href="https://www.linkedin.com/company/quantxalumni/"
            className="underline transition-colors duration-200 ease-in-out hover:text-nice-blue"
          >
            QuantX
          </a>
        </li>
        <li>
          MLOps & Data ZoomCamps by{" "}
          <a
            href="https://datatalks.club/"
            className="underline transition-colors duration-200 ease-in-out hover:text-nice-blue"
          >
            DataTalks.club
          </a>
        </li>

        <li>
          Christmas coding challenge{" "}
          <a
            href="https://adventofcode.com/"
            className="underline transition-colors duration-200 ease-in-out hover:text-nice-blue"
          >
            AdventOfCode
          </a>
        </li>
      </ul>
      <span className="text-3xl">✍🏼</span>{" "}
      <ClientWord
        initial="Additionally"
        words={title3words}
        className="cursor-pointer text-3xl underline transition-all duration-200 ease-in-out hover:text-nice-blue"
      />
      <p className="mt-8 text-lg">
        Still don&apos;t really know me? Here are some fun facts:
      </p>
      <ul className="mb-8 mt-4 list-inside list-disc space-y-1 pl-8 text-lg">
        <li>Studied Applied Mathematics engineering 💉</li>
        <li>Went for a solo bike trip around Tunisia 🚴 </li>
        <li>
          <span>
            <a
              className="cursor-pointer underline transition-all duration-200 ease-in-out hover:text-nice-blue"
              href="https://monkeytype.com/profile/WassAB"
            >
              74 WPM
            </a>
          </span>{" "}
          and increasing ⌨
        </li>
        <li>Born in Tunis, Tunisia 🌃</li>
        <li>Adventurer & Beach lover 🌊 </li>
        <li>
          <span>
            <a
              className="cursor-pointer underline transition-all duration-200 ease-in-out hover:text-nice-blue"
              href="https://lolprofile.net/summoner/euw/sokkarHalewa1-9554#update"
            >
              Survivor
            </a>
          </span>{" "}
          in League of Legends & Warcraft 3 admirer 🔫
        </li>
      </ul>
    </main>
  );
};

export default About;
