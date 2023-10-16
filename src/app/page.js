"use client";
import { CircleArrowLeft, CircleArrowRight } from "@/components/icons";
import { useEffect, useState } from "react";

export default function Home() {
  const POSTS_PER_PAGE = 5;
  const [postList, setPostList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const startIdx = (currentPage - 1) * POSTS_PER_PAGE;
  const endIdx = startIdx + POSTS_PER_PAGE;
  const currentPosts = postList.slice(startIdx, endIdx);
  const totalPages = Math.ceil(postList?.length / POSTS_PER_PAGE);

  const getPosts = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((response) => {
        setPostList(response);
      });
  };

  useEffect(() => {
    getPosts();
  }, []);

  console.log({ postList });

  return (
    <main className="flex min-h-screen flex-col gap-5 md:gap-10 p-5 md:p-20">
      <h1 className="text-center text-2xl font-bold">Post Grid</h1>
      <div>
        <div className="flex justify-between items-center mb-6">
          <p>
            Page {currentPage} of {totalPages}
          </p>
          <div>
            <button
              onClick={() => setCurrentPage((prev) => prev - 1)}
              disabled={currentPage === 1}
              className={`hover:opacity-75 ${
                currentPage === 1 ? "cursor-not-allowed" : undefined
              }`}
            >
              <CircleArrowLeft size={32} />
            </button>

            <button
              onClick={() => setCurrentPage((prev) => prev + 1)}
              disabled={currentPage === totalPages}
              className={`hover:opacity-75 ${
                currentPage === totalPages ? "cursor-not-allowed" : undefined
              }`}
            >
              <CircleArrowRight size={32} />
            </button>
          </div>
          {/* TODO: add end button */}
        </div>
        <div>{/* TODO: create pagination */}</div>
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-8">
          {currentPosts.map((item) => (
            <div key={item.id} className="rounded-lg p-4 bg-blue-300">
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <h4 className="text-xs mb-5">User ID #{item.userId}</h4>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
