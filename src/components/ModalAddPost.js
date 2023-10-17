import React, { useState } from "react";
import { XIcon } from "./icons";

const ModalAddPost = ({ show, setShow }) => {
  const [dataPost, setDataPost] = useState({
    userId: "",
    title: "",
    body: "",
  });

  const clearForm = () => {
    setDataPost({
      userId: null,
      title: "",
      body: "",
    });
  };
  const handleAddPost = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts`, {
      method: "POST",
      headers: {
        "Content-type": "text/plain",
      },
      body: JSON.stringify(dataPost),
    })
      .then((res) => res.json())
      .then((response) => {
        alert(response);
        console.log({ response });
      })
      .catch((err) => {
        alert(err);
        console.log(err);
      });
  };

  return show ? (
    <div className="overlay">
      <div
        className={`modal flex flex-col gap-5 `}
        // style={{ width: "80%", height: "75%" }}
      >
        <div className="flex items-center justify-between">
          <h1 className="font-semibold">Add Post</h1>
          <button onClick={() => setShow(false)}>
            <XIcon size={20} />
          </button>
        </div>
        <form className="grid grid-cols-2 gap-2">
          <label>User ID:</label>
          <input
            type="text"
            name="userId"
            value={dataPost?.userId}
            className="p-1 rounded"
            onChange={(e) =>
              setDataPost((prev) => ({ ...prev, userId: e.target.value }))
            }
          />

          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={dataPost?.title}
            className="p-1 rounded"
            onChange={(e) =>
              setDataPost((prev) => ({ ...prev, title: e.target.value }))
            }
          />

          <label>Body:</label>
          <input
            type="text"
            name="body"
            value={dataPost?.body}
            className="p-1 rounded"
            onChange={(e) =>
              setDataPost((prev) => ({ ...prev, body: e.target.value }))
            }
          />

          <button
            className={
              "col-span-2 mt-4 hover:opacity-75 border-2 border-black px-3 rounded-full"
            }
            type="submit"
            onClick={handleAddPost}
          >
            Add
          </button>
        </form>
      </div>
    </div>
  ) : null;
};

export default ModalAddPost;
