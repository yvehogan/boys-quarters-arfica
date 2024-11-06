import React from 'react';

interface Resource {
  title: string;
  description: string;
  image: string;
}

interface ResourceCardProps extends Resource {
  className?: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ 
  title, 
  description, 
  image, 
  className = "" 
}) => (
  <div className={`max-w-xs ${className}`}>
    <div className="rounded-lg overflow-hidden mb-4">
      <img 
        src="/images/book.png" 
        alt={title} 
        className="w-full h-full object-cover"
      />
    </div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-lg text-secondary">{description}</p>
  </div>
);

const Resources: React.FC = () => {
  const books: Resource[] = [
    {
      title: "Boyfessions",
      description: "Learn about our pillars of impact as an organisation",
      image: "images/book.png"
    },
    {
      title: "Work in Progress",
      description: "Read about our Founder's story and evolution.",
      image: "images//book.png"
    }
  ];

  const articles: Resource[] = [
    {
      title: "Boyfessions",
      description: "Learn about our pillars of impact as an organisation",
      image: "/images/book.png"
    },
    {
      title: "Work in Progress",
      description: "Read about our Founder's story and evolution.",
      image: "/images/book.png"
    },
    {
      title: "Work in Progress",
      description: "Read about our Founder's story and evolution.",
      image: "/images/book.png"
    }
  ];

  return (
    <div className="md:px-28 px-8 py-12">
      <div className="mb-12">
        <h1 className="text-[50px] font-bold mb-14">Resources</h1>
        
        <section className="mb-16">
          <h2 className="text-4xl font-semibold mb-6">Books & PDFs</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {books.map((book, index) => (
              <ResourceCard
                key={index}
                title={book.title}
                description={book.description}
                image={book.image}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-semibold mb-6">Articles</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {articles.map((article, index) => (
              <ResourceCard
                key={index}
                title={article.title}
                description={article.description}
                image={article.image}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resources;