// pages/management/index.js
"use client";

import React, { useState } from "react";
import Navigation from "@/app/components/Navigation";
import AnimeOpeningForm from "@/app/components/AnimeOpeningForm";

const initialOpenings = [
  { id: 1, title: "We Are", artist: "Hiroshi Kitadani", anime: "One Piece" },
  {
    id: 2,
    title: "Departure",
    artist: "Masatoshi Ono",
    anime: "Hunter x Hunter",
  },
  {
    id: 3,
    title: "Again",
    artist: "You",
    anime: "Full Metal Alchemist: Brotherhood",
  },
  {
    id: 4,
    title: "Tank",
    artist: "Yoko Kanno and Seatbelts",
    anime: "Cowboy Bebop",
  },
  {
    id: 5,
    title: "Unravel",
    artist: "TK from Ling Toshite Sigure",
    anime: "Tokyo Ghoul",
  },
  { id: 6, title: "Gurenge", artist: "LiSA", anime: "Demon Slayer" },
  { id: 7, title: "The World", artist: "VAP Official", anime: "Death Note" },
  {
    id: 8,
    title: "Guren no Yumiya",
    artist: "Linked Horizon",
    anime: "Attack on Titan",
  },
];

const Management = () => {
  const [openings, setOpenings] = useState(initialOpenings);
  const [editingOpening, setEditingOpening] = useState(null);

  const addOpening = (newOpening) => {
    setOpenings([...openings, newOpening]);
  };

  const editOpening = (id, updatedOpening) => {
    const updatedOpenings = openings.map((opening) =>
      opening.id === id ? { ...opening, ...updatedOpening } : opening
    );
    setOpenings(updatedOpenings);
    setEditingOpening(null);
  };

  const deleteOpening = (id) => {
    const updatedOpenings = openings.filter((opening) => opening.id !== id);
    setOpenings(updatedOpenings);
  };

  const startEditing = (opening) => {
    setEditingOpening(opening);
  };

  return (
    <div className="bg-babyblue min-h-screen">
      <Navigation />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4 text-brown">
          Manage Anime Openings
        </h1>

        {/* Form for adding/editing */}
        <AnimeOpeningForm
          addOpening={addOpening}
          editOpening={editOpening}
          editingOpening={editingOpening}
        />

        {/* List of openings */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-brown mb-4">
            List of Openings
          </h2>
          <ul>
            {openings.map((opening) => (
              <li key={opening.id} className="mb-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-lg text-brown">
                      {opening.title} x {opening.artist} ({opening.anime})
                    </p>
                  </div>
                  <div>
                    <button
                      className="text-orange hover:text-red-500"
                      onClick={() => deleteOpening(opening.id)}
                    >
                      Delete
                    </button>
                    <button
                      className="ml-2 text-brown hover:text-orange"
                      onClick={() => startEditing(opening)}
                    >
                      Edit
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Management;
