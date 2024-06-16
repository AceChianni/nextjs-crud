// components/AnimeOpeningForm.js
"use client";

import React, { useState, useEffect } from "react";

const AnimeOpeningForm = ({ addOpening, editOpening, editingOpening }) => {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [anime, setAnime] = useState("");

  useEffect(() => {
    if (editingOpening) {
      setTitle(editingOpening.title);
      setArtist(editingOpening.artist);
      setAnime(editingOpening.anime);
    }
  }, [editingOpening]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && artist && anime) {
      if (editingOpening) {
        editOpening(editingOpening.id, { title, artist, anime });
      } else {
        const id = new Date().getTime(); // Replace with actual ID generation logic
        addOpening({ id, title, artist, anime });
      }
      setTitle("");
      setArtist("");
      setAnime("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <h2 className="text-xl font-semibold text-brown mb-4">
        {editingOpening ? "Edit Opening" : "Add New Opening"}
      </h2>
      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="flex-1 p-2 mr-2 bg-white rounded border border-gray-300"
          required
        />
        <input
          type="text"
          placeholder="Artist"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
          className="flex-1 p-2 mr-2 bg-white rounded border border-gray-300"
          required
        />
        <input
          type="text"
          placeholder="Anime"
          value={anime}
          onChange={(e) => setAnime(e.target.value)}
          className="flex-1 p-2 bg-white rounded border border-gray-300"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-orange text-white px-4 py-2 rounded hover:bg-red-500"
      >
        {editingOpening ? "Save Changes" : "Add Opening"}
      </button>
    </form>
  );
};

export default AnimeOpeningForm;
