import React from "react";

const events = [
  {
    title: "Winner of ActInSpace Challenge",
    company: "ActInSpace - CNES - EUSPA",
    url: "https://www.connectbycnes.fr/en/actinspace",
    date: "Nov. 2022 - Jan. 2023",
    location: "Cannes, France",
    desc: "Pitched a startup project to restore Japan's marine ecosystem by tackling plastic pollution using satellite data, winning the 2022 Connect by CNES prize.",
  },

  {
    title: "Winner of BIGQuantum Hackathon",
    company: "QuantX",
    url: "https://quantx.fr/",
    date: "Sep. 2021",
    location: "Paris, France",
    desc: "Pitched, with a team of 4 scientists, our innovative solution leveraging quantum processers & Attention Transformers for breast cancer slides classification challenge.",
  },
];

const Spotlight: React.FC = () => {
  return (
    <div>
      <main className="p-8 font-body">
        <h4 className="mb-6 animate-slideDown text-3xl font-semibold">
          📸 Explore a selection of standout achievements from recent
          competitions !
        </h4>
        <hr className="my-4 border-t-2 border-body-light-grey" />
        {events.map((event, index) => (
          <div key={index}>
            <p className="mb-1 text-xl font-bold text-white md:text-2xl">
              {event.title} -{" "}
              <a
                href={event.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-nice-blue hover:underline"
              >
                {event.company}
              </a>
            </p>
            <p className="text-base font-medium">
              {event.date}; {event.location}
            </p>
            <p className="mb-2 text-base">{event.desc}</p>
            <hr className="my-4 border-t-2 border-body-light-grey" />
          </div>
        ))}
      </main>
    </div>
  );
};

export default Spotlight;
