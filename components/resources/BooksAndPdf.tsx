import React from "react";

const BooksAndPdf = () => {
  const books = [
    {
      title: "State of the BoyChild Address",
      description: "State of the Boy Child Address - Solomon O. Ayodele",
      image: "/images/book.png",
      downloadLink: "/State of the Boy Child Address - Solomon O. Ayodele.pdf",
    },
    {
      title: "Boyfessions",
      description: "Download a compendium of confessions for Boys",
      image: "/images/book.png",
      downloadLink: "",
    },
    {
      title: "Actions, Boys & Choices",
      description:
        "A comprehensive manual on teaching Boys about Sexual Abuse",
      image: "/images/book.png",
      downloadLink: "",
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
            {book.downloadLink && (
              <a
                href={book.downloadLink}
                download
                className="bg-transparent border border-primary text-primary px-6 py-2 flex items-center rounded-lg text-sm"
              >
                Download PDF
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BooksAndPdf;