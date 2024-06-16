// components/Navigation.js

"use client";
import React from "react";
import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="bg-babyblue p-4">
      <Link className="m-1 text-brown-500 hover:text-orange-700" href="/">
        Home
      </Link>
      <Link
        className="m-1 text-brown-500 hover:text-orange-700"
        href="/management"
      >
        Manage Library
      </Link>
    </nav>
  );
};

export default Navigation;
