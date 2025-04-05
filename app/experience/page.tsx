import React from "react";

const positions = [
  {
    title: "Lead ML Engineer",
    company: "Mindee",
    date: "Sept. 2023 - Present",
    desc: "As Lead Machine Learning Engineer, I have been developing an AI-based platform for document understanding while leading the ML team to support large-scale inference using LLMs and computer vision. I am revolutionizing our inference stack through QA testing and Kubernetes, optimizing large vector data serving with microservices (pgvector, FastAPI), and enhancing benchmark evaluations. Additionally, I am building Retrieval-Augmented Generation (RAG) systems and developing AI agents for summarization and knowledge distillation.",
  },
  {
    title: "Senior ML Engineer",
    company: "Jellysmack (Ex Keli Networks)",
    date: "April 2022 - August 2023",
    desc: "I supported a team of seven Data and R&D Scientists in deploying computer vision models to production. I was responsible for AI model lifecycle monitoring, building ML libraries, and setting up internal ML frameworks. Additionally, I developed a cloud-based asynchronous Python job to collect 1K assets weekly from an external API and conducted internal audits on MLOps projects and data quality management.",
  },
  {
    title: "Data Scientist",
    company: "FieldBox.ai",
    date: "Nov. 2019 - March 2022",
    desc: "As a Data Scientist, I led five data science projects in collaboration with clients, ensuring compliance with project constraints. I provided customer support, helping clients adopt AI agents, microservices, cloud, and DevOps technologies. My work spanned industries including oil & gas, rail transport, food, and water technologies.",
  },
  {
    title: "Data science Research intern",
    company: "BearingPoint",
    date: "April 2019 - Sep. 2019",
    desc: "I worked on time series modeling for manufacturing, deploying prediction models (Prophet, RNNs, SARIMA, RF) using APIs and serverless infrastructure (AWS). I also conducted performance analysis, optimizations, and benchmark evaluations on jupyter notebooks.",
  },
  {
    title: "Data science Research intern",
    company: "Jules Group (Ex Harold Waste)",
    date: "May 2018 - Sep. 2018",
    desc: "I implemented deep learning algorithms (DBN, CNN, AutoEncoders) for trash image classification. I evaluated model performance, integrated the selected model into a Flask API for mobile app usage, and benchmarked deep learning algorithms against our solution.",
  },
];

const Experience: React.FC = () => {
  return (
    <div>
      <main className="p-8 font-body">
        <p>🧑‍💻 Explore my working background!</p>
        <hr className="my-4 border-t-2 border-body-light-grey" />
        {positions.map((position, index) => (
          <div key={index}>
            <p className="font-bold">{position.title} at {position.company}</p>
            <p className="mb-2">
              {position.date}
            </p>
            <p className="mb-2">{position.desc}</p>
            
            <hr className="my-4 border-t-2 border-body-light-grey" />
          </div>
        ))}
      </main>
    </div>
  );
};

export default Experience;
