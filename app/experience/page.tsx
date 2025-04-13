import React from "react";

const positions = [
  {
    title: "Lead Machine Learning Engineer",
    company: "Mindee",
    url: "https://www.mindee.com",
    date: "Sept. 2023 - Present",
    location: "Paris, France",
    desc: "As Lead Machine Learning Engineer, I have been developing an AI-based platform for document understanding while leading the ML team to support large-scale inference using LLMs and computer vision. I am revolutionizing our inference stack through QA testing and Kubernetes, optimizing large vector data serving with microservices (pgvector, FastAPI), and enhancing benchmark evaluations. Additionally, I am building Retrieval-Augmented Generation (RAG) systems and developing AI agents for summarization and knowledge distillation.",
    stack: [
      "LLMs",
      "FastAPI",
      "Kubernetes",
      "pgvector",
      "QA",
      "Benchmarking",
      "RAG",
      "AI Agents",
    ],
  },
  {
    title: "Senior Machine Learning Engineer",
    company: "Jellysmack",
    url: "https://www.jellysmack.com",
    date: "April 2022 - August 2023",
    location: "Paris, France",
    desc: "I supported a team of seven Data and R&D Scientists in deploying computer vision models to production. I was responsible for AI model lifecycle monitoring, building ML libraries, and setting up internal ML frameworks. Additionally, I developed a cloud-based asynchronous Python job to collect 1K assets weekly from an external API and conducted internal audits on MLOps projects and data quality management.",
    stack: [
      "Computer Vision",
      "Python",
      "MLOps",
      "Async Jobs",
      "Cloud",
      "API Integrations",
    ],
  },
  {
    title: "Data Scientist",
    company: "FieldBox.ai",
    url: "https://www.fieldbox.ai",
    date: "Nov. 2019 - March 2022",
    location: "Paris, France",
    desc: "As a Data Scientist, I led 5+ AI projects in collaboration with clients, ensuring compliance with project constraints. I provided customer support, helping clients adopt AI agents, microservices, cloud, and DevOps technologies. My work spanned industries including oil & gas, rail transport, food, and water technologies.",
    stack: ["AI Agents", "Microservices", "Cloud", "DevOps", "Industrial AI"],
  },
  {
    title: "Data science Research intern",
    company: "BearingPoint",
    url: "https://www.bearingpoint.com",
    date: "April 2019 - Sep. 2019",
    location: "Paris, France",
    desc: "I worked on time series modeling for manufacturing, deploying prediction models (Prophet, RNNs, SARIMA, RF) using APIs and serverless infrastructure (AWS). I also conducted performance analysis, optimizations, and benchmark evaluations on jupyter notebooks.",
    stack: ["Prophet", "RNN", "SARIMA", "AWS", "API", "Jupyter"],
  },
  {
    title: "Data science Research intern",
    company: "Jules Group (Ex Harold Waste)",
    url: "https://www.julesai.com/",
    date: "May 2018 - Sep. 2018",
    location: "Paris, France",
    desc: "I implemented deep learning algorithms (DBN, CNN, AutoEncoders) for trash image classification. I evaluated model performance, integrated the selected model into a Flask API for mobile app usage, and benchmarked deep learning algorithms against our solution.",
    stack: ["CNN", "AutoEncoders", "Flask", "Deep Learning", "Benchmarking"],
  },
];

const Experience: React.FC = () => {
  return (
    <div className="bg-body-grey px-6 py-12 font-body text-white md:px-10">
      <main className="mx-auto max-w-5xl">
        <p className="mb-6 animate-slideDown text-3xl  font-bold">
          🧑‍💻 Explore my working background!
        </p>
        <hr className="my-4 border-t-2 border-body-light-grey" />
        {positions.map((position, index) => (
          <div
            key={index}
            className="mb-10 animate-slideDown"
            style={{
              animationDelay: `${index * 0.1}s`,
              animationFillMode: "both",
            }}
          >
            <p className="mb-1 text-xl font-bold text-white md:text-2xl">
              {position.title} @{" "}
              <a
                href={position.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-nice-blue hover:underline"
              >
                {position.company}
              </a>
            </p>

            <p className="text-lg font-medium">
              {position.date}; {position.location}
            </p>
            <p className="mb-4 text-lg leading-relaxed text-gray-200">
              {position.desc}
            </p>

            <div className="flex flex-wrap gap-2">
              {position.stack.map((tech, i) => (
                <span
                  key={i}
                  className="rounded-full bg-nice-blue bg-opacity-20 px-2.5 py-1 text-xs font-medium text-nice-blue"
                >
                  {tech}
                </span>
              ))}
            </div>

            <hr className="my-6 border-t border-body-light-grey" />
          </div>
        ))}
      </main>
    </div>
  );
};

export default Experience;
