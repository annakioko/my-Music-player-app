import React, { useState } from "react";

export default function Contacts() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Comment:", comment);

    setName("");
    setEmail("");
    setComment("");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="max-w-md w-full px-4">
        <h2 className="text-2xl font-bold mb-4">Leave a Comment</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block text-white-700 font-semibold">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-400"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-white-700 font-semibold">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-400"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="comment"
            className="block text-white-700 font-semibold"
          >
            Comment
          </label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write your comment here"
            className="border border-gray-300 rounded-md px-3 py-2 w-full h-32 resize-none focus:outline-none focus:border-blue-400"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 w-full"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
