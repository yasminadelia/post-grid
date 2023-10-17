import React from "react";
import { CircleArrowLeft, CircleArrowRight } from "./icons";

const PageNavigation = ({ currentPage, setCurrentPage, totalPages }) => {
  return (
    <section className="mb-6">
      <div className="flex flex-wrap justify-between items-center mb-2 gap-2">
        <p>
          Page {currentPage} of {totalPages}
        </p>
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setCurrentPage(1)}
            disabled={currentPage === 1}
            className={`hover:opacity-75 border-2 border-black px-3 rounded-full ${
              currentPage === 1 ? "cursor-not-allowed" : undefined
            }`}
          >
            Start
          </button>
          <button
            onClick={() => setCurrentPage((prev) => prev - 1)}
            disabled={currentPage === 1}
            className={`hover:opacity-75 ${
              currentPage === 1 ? "cursor-not-allowed" : undefined
            }`}
          >
            <CircleArrowLeft size={32} />
          </button>

          {Array.from({ length: 5 }).map((_, idx) => (
            <button
              onClick={() => setCurrentPage(idx + 1)}
              disabled={currentPage === idx + 1}
              className={`hover:opacity-75 border-2 border-black px-1 w-8 h-8 rounded-full`}
            >
              {idx + 1}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage((prev) => prev + 1)}
            disabled={currentPage === totalPages}
            className={`hover:opacity-75 ${
              currentPage === totalPages ? "cursor-not-allowed" : undefined
            }`}
          >
            <CircleArrowRight size={32} />
          </button>
          <button
            onClick={() => setCurrentPage(totalPages)}
            disabled={currentPage === totalPages}
            className={`hover:opacity-75 border-2 border-black px-3 rounded-full ${
              currentPage === totalPages ? "cursor-not-allowed" : undefined
            }`}
          >
            End
          </button>
        </div>
      </div>
    </section>
  );
};

export default PageNavigation;
