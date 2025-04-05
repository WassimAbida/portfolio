import React from "react";

const events = [
  {
    title: "Winner of ActInSpace Challenge",
    company: "ActInSpace - CNES - EUSPA",
    date: "Nov. 2022 - Jan. 2023",
    location: "Cannes, France",
    desc: "Pitched a startup project to restore Japan's marine ecosystem by tackling plastic pollution using satellite data, winning the 2022 Connect by CNES prize.",
  },

  {
    title: "Winner of BIGQuantum Hackathon",
    company: "QuantX",
    date: "Sep. 2021",
    location: "Paris, France",
    desc: "Pitched, with a team of 4 scientists, our innovative solution leveraging quantum processers & Attention Transformers for breast cancer slides classification challenge.",
  },
];

const Spotlight: React.FC = () => {
  return (
    <div>
      <main className="p-8 font-body">
        <p>📸 Explore a selection of standout achievements from recent competitions !</p>
        <hr className="my-4 border-t-2 border-body-light-grey" />
        {events.map((event, index) => (
          <div key={index}>
            <p className="font-bold">{event.title}</p>
            <p>{event.date}, {event.location}</p>
            <p className="mb-2">
              <i>{event.company} </i>
            </p>
            
            <p className="mb-2">{event.desc}</p>
            <hr className="my-4 border-t-2 border-body-light-grey" />
          </div>
        ))}
      </main>
    </div>
  );
};

export default Spotlight;
