import React from "react";

const Articles = () => {
  const articles = [
    {
      title: "Men Picking Up the Gauntlet #8: Solomon O. Ayodele",
      url: "https://roselineadewuyi.com/men-picking-up-the-gauntlet-8-solomon-o-ayodele/",
    },
    {
      title: "TopNaija Stories: Solomon Ayodele, Founder Boys Quarters Africa",
      url: "https://topnaija.ng/topnaija-stories-solomon-ayodele-founder-boys-quarters-africa/amp/",
    },
    {
      title:
        "NGO to Partner Lagos Government to Re-educate Men on Gender-Based Violence",
      url: "https://www.thecable.ng/ngo-to-partner-lagos-government-to-re-educate-men-on-gender-based-violence/",
    },
  ];

  return (
    <div>
      <h2 className="text-[40px] font-bold text-secondary mb-5">Articles</h2>
      <ul className="">
        {articles.map((article, index) => (
          <li key={index} className="py-2 hover:text-opacity-20">
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              {article.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Articles;