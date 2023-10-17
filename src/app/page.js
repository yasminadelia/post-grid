"use client";
import ModalAddPost from "@/components/ModalAddPost";
import PageNavigation from "@/components/PageNavigation";
import { useEffect, useState } from "react";

export default function Home() {
  const POSTS_PER_PAGE = 5;
  const [postList, setPostList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showModalAdd, setShowModalAdd] = useState(false);

  const startIdx = (currentPage - 1) * POSTS_PER_PAGE;
  const endIdx = startIdx + POSTS_PER_PAGE;
  const currentPosts = postList.slice(startIdx, endIdx);
  const totalPages = Math.ceil(postList?.length / POSTS_PER_PAGE);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((response) => {
        setPostList(response);
      });
  };

  console.log({ postList });

  return (
    <main className="flex min-h-screen flex-col gap-5 md:gap-10 p-5 md:p-20">
      <div className="flex">
        <h1 className="text-center text-2xl font-bold w-full">Post Grid</h1>

        <button
          onClick={() => setShowModalAdd(true)}
          className={`flex items-center justify-center hover:opacity-75 border-2 border-black px-3 
          rounded-full text-2xl w-10 h-10`}
        >
          <p className="-mt-2">+</p>
        </button>
      </div>
      <div>
        <PageNavigation
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />

        {/* Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-8">
          {currentPosts.map((item) => (
            <div key={item.id} className="rounded-lg p-4 bg-blue-300">
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <h4 className="text-xs mb-5">User ID #{item.userId}</h4>
              <p>{item.body}</p>
            </div>
          ))}
        </section>
      </div>

      <ModalAddPost show={showModalAdd} setShow={setShowModalAdd} />
    </main>
  );
}
