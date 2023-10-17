import React from "react";

const PostAddIndex = () => {
  const addPost = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts`, {
      method: "POST",
    })
      .then((res) => res.json())
      .then((response) => {
        if (response?.status == 200) {
          alert("Post added successfully!");
        } else {
          alert("Failed to add post");
        }
      })
      .catch((err) => {
        console.log(err?.message);
        alert("Failed to add post");
      });
  };
  return (
    <main className="flex min-h-screen flex-col gap-5 md:gap-10 p-5 md:p-20 bg-gray-200">
      <h1 className="text-center text-2xl font-bold">Add Post</h1>
      <form className="flex flex-col gap-2">
        <label className="flex flex-wrap gap-2">
          User ID:
          <input type="number" name="userId" />
        </label>

        <label className="flex flex-wrap gap-2">
          Title:
          <input type="text" name="title" />
        </label>

        <label className="flex flex-wrap gap-2">
          Body:
          <input type="text" name="body" />
        </label>
      </form>
    </main>
  );
};

export default PostAddIndex;
