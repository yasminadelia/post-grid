import React, { useState } from "react";
import { XIcon } from "./icons";
import axios from "axios";
import Swal from "sweetalert2";

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

  const handleClose = () => {
    setShow(false);
    clearForm();
  };

  const handleAddPost = () => {
    axios
      .post(`https://jsonplaceholder.typicode.com/posts`, dataPost)
      .then((response) => {
        console.log(response);

        handleClose();
        Swal.fire({
          icon: "success",
          title: "Post added succesfully!",
          showConfirmButton: false,
          timer: 1500,
        });
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
          <button onClick={handleClose}>
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
            type="button"
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
