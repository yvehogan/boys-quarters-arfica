import React from "react";

const PressReleases = () => {
  const pressReleases = [
    {
      title:
        "Boys Quarters Africa to host largest Pan-African Boychild Summit May 16",
      url: "https://thenationonlineng.net/boys-quarters-africa-to-host-largest-pan-african-boychild-summit-may-16/",
    },
    {
      title:
        "NGO, financial firm partner to host over 20,000 boys in 2025 summit",
      url: "https://www.vanguardngr.com/2025/03/ngo-financial-firm-partner-to-host-over-20000-boys-in-2025-summit/",
    },
    {
      title:
        "International Boychild Summit will redefine masculinity in Africa – Boys Quarters Africa",
      url: "https://tribuneonlineng.com/international-boychild-summit-will-redefine-masculinity-in-africa-boys-quarters-africa/",
    },
    {
      title:
        "Boys Quarters Africa set to host 20,000 boys at largest Pan-African Boychild Summit",
      url: "https://guardian.ng/features/boys-quarters-africa-set-to-host-20000-boys-at-largest-pan-african-boychild-summit/",
    },
    {
      title:
        "Boys Quarters Africa set to host 20,000 boys at largest Pan-African Boychild Summit",
      url: "https://www.thisdaylive.com/index.php/2025/03/31/boys-quarters-africa-set-to-host-20000-boys-at-largest-pan-african-boychild-summit/",
    },
    {
      title: "Neglect of boys threatens society - NGO warns",
      url: "https://www.vanguardngr.com/2025/02/neglect-of-boys-threatens-society-ngo-warns/",
    },
  ];

  return (
    <div>
      <h2 className="text-[40px] font-bold text-secondary mb-5">Press Releases</h2>
      <ul className="">
        {pressReleases.map((release, index) => (
          <li key={index} className="py-2 hover:text-opacity-20">
            <a href={release.url} target="_blank" rel="noopener noreferrer">
              {release.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PressReleases;
