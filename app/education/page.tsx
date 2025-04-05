import React from "react";

const elements = [
  {
    title: "Data Project Manager Specialization",
    company: "DataScientest",
    date: "Sept. 2023 - Dec. 2023",
    location: "Paris, France",
    desc: "An intensive 3-month program focused on mastering data-driven product design, development, and management — empowering impactful, insight-led decision-making.",
  },
  {
    title: "Master degree (M2) in Data Science",
    company: "Ecole Polytechnique (X)",
    date: "2018-2019",
    location: "Palaiseau, France",
    desc: "Built solid expertise in cutting-edge AI domains including computer vision, NLP, reinforcement learning, and data analysis, grounded in advanced mathematical theory.",
  },
  {
    title: "Applied Mathematics Engineering (Double Diploma)",
    company: "ENSTA ParisTech - Tunisia's National Engineering School",
    date: "2016-2019",
    location: "Palaiseau, France - Tunis, Tunisia",
    desc: "Three years engineering class with intended speciality in applied mathematics and science of data optimization.",
  },
  {
    title: "Maths and Physics preparatory class",
    company: "IPEIS: Preparatory Institute of engineering studies of Sfax",
    date: "2014-2016",
    location: "Sfax, Tunisia",
    desc: "Ranked 16th out of 4,000 in Tunisia’s national entrance exams for engineering schools and graduated top of class from the prestigious IPEIS preparatory program.",
  },
  {
    title: "Baccalaureate diploma - Mathematics",
    company: "High school 9 April 1938 Sfax",
    date: "2010-2014",
    location: "Sfax, Tunisia",
    desc: "",
  },
];

const Studies: React.FC = () => {
  return (
    <div>
      <main className="p-8 font-body">
        <p> 🎓 Explore my academic journey!</p>
        <hr className="my-4 border-t-2 border-body-light-grey" />
        {elements.map((element, index) => (
          <div key={index}>
            <p className="font-bold">{element.title}</p>
            <p>{element.date}</p>
            <p className="mb-2">
              <i>{element.company} - {element.location} </i>
            </p>
            <p className="mb-2">{element.desc}</p>
            
            <hr className="my-4 border-t-2 border-body-light-grey" />
          </div>
        ))}
      </main>
    </div>
  );
};

export default Studies;
