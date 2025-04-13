import React from "react";

const elements = [
  {
    title: "Data Project Manager Specialization",
    name: "DataScientest",
    date: "Sept. 2023 - Dec. 2023",
    location: "Paris, France",
    url: "https://datascientest.com",
    desc: "An intensive 3-month program focused on mastering data-driven product design, development, and management — empowering impactful, insight-led decision-making.",
  },
  {
    title: "Master degree (M2) in Data Science",
    name: "Ecole Polytechnique X",
    date: "2018-2019",
    url: "https://www.polytechnique.edu/en",
    location: "Palaiseau, France",
    desc: "Built solid expertise in cutting-edge AI domains including computer vision, NLP, reinforcement learning, and data analysis, grounded in advanced mathematical theory.",
  },
  {
    title: "Applied Mathematics Engineering (Double Diploma)",
    name: "ENSTA ParisTech - Tunisia's National Engineering School (ENIT)",
    date: "2016-2019",
    url: "https://www.ensta-paris.fr/en",
    location: "Palaiseau, France - Tunis, Tunisia",
    desc: "Three years engineering class with intended speciality in applied mathematics and science of data optimization.",
  },
  {
    title: "Maths and Physics preparatory class",
    name: "Preparatory Institute of engineering studies of Sfax (IPEIS)",
    date: "2014-2016",
    url: "https://www.ipeis.rnu.tn/",
    location: "Sfax, Tunisia",
    desc: "Ranked 16th out of 4,000 in Tunisia’s national entrance exams for engineering schools and graduated top of class from the prestigious IPEIS preparatory program.",
  },
];

const Studies: React.FC = () => {
  return (
    <div>
      <main className="p-8 font-body">
        <h4 className="mb-6 animate-slideDown text-3xl font-semibold">
          🎓 Explore my academic journey!
        </h4>
        <hr className="my-4 border-t-2 border-body-light-grey" />
        {elements.map((element, index) => (
          <div key={index}>
            <p className="mb-1 text-xl font-bold text-white md:text-2xl">
              {element.title} -{" "}
              <a
                href={element.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-nice-blue hover:underline"
              >
                {element.name}
              </a>
            </p>
            <p className="text-base font-medium">
              {element.date}; {element.location}
            </p>
            <p className="mb-2 text-base">{element.desc}</p>
            <hr className="my-4 border-t-2 border-body-light-grey" />
          </div>
        ))}
      </main>
    </div>
  );
};

export default Studies;
