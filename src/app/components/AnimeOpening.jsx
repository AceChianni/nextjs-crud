// components/AnimeOpening.js
"use client";

import React from "react";

const AnimeOpening = ({ opening, onDelete, onEdit }) => {
  const handleDelete = () => {
    onDelete(opening.id);
  };

  const handleEdit = () => {
    onEdit(opening.id);
  };

  return (
    <div className="bg-white p-4 shadow-md rounded-md border border-brown">
      <h3 className="text-lg font-semibold text-babyblue">
        {opening.title} x {opening.artist}
      </h3>
      <p className="text-gray-600">{opening.anime}</p>
      <div className="mt-2">
        <button
          onClick={handleEdit}
          className="bg-orange text-white px-4 py-2 rounded-md hover:bg-opacity-80"
        >
          Edit
        </button>
        <button
          onClick={handleDelete}
          className="ml-2 bg-brown text-white px-4 py-2 rounded-md hover:bg-opacity-80"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default AnimeOpening;
