import React from "react";

const BooksAndPdf = () => {
  const books = [
    {
      title: "Boyfessions",
      description: "Download a compendium of confessions for Boys",
      image: "/images/book.png",
    },
    {
      title: "Actions, Boys & Choices",
      description:
        "A comprehensive manual on teaching Boys about Sexual Abuse",
      image: "/images/book.png",
    },
  ];

  return (
    <div className="mt-20">
      <h2 className="text-[40px] font-bold text-secondary mb-10">Books & PDFs</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {books.map((book, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center space-y-4"
          >
            <img
              src={book.image}
              alt={book.title}
              className="w-full max-w-[300px] rounded-lg shadow-md"
            />
            <h3 className="text-lg font-semibold">{book.title}</h3>
            <p className="text-sm text-gray-600">{book.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BooksAndPdf;