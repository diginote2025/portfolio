"use client"
import React from 'react';

export default function Blog() {
  return (
    <section className="w-full flex flex-col justify-center items-center h-screen bg-gray-950 text-white text-center px-6">
      <h1 className="text-5xl font-bold mb-4 max-md:text-4xl max-sm:text-3xl">Blog</h1>
      <p className="text-2xl max-md:text-xl max-sm:text-lg">Coming Soon!</p>
      <p className="text-lg mt-4 max-md:text-base max-sm:text-sm">
        Stay tuned for updates! We’re working hard to bring you the latest articles and insights.
      </p>
      <div className="mt-10">
        <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-full transition-all duration-300">
          Notify Me
        </button>
      </div>
    </section>
  );
}
