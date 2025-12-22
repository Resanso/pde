"use client";

import { useState } from "react";
import Image from "next/image";

const highlightImages = ["/th1.jpeg", "/th2.jpeg", "/th3.jpeg"];

export function HighlightSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? highlightImages.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) =>
      prev === highlightImages.length - 1 ? 0 : prev + 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8 uppercase">
          Today's Highlight
        </h2>

        {/* Image Slider */}
        <div className="relative w-full h-96 bg-gray-300 rounded-xl overflow-hidden shadow-inner group">
          {/* Current Image */}
          <Image
            src={highlightImages[currentIndex]}
            alt={`Highlight ${currentIndex + 1}`}
            fill
            className="object-cover transition-opacity duration-500"
            priority
          />

          {/* Navigation Arrows */}
          <div className="absolute inset-y-0 left-4 flex items-center z-10">
            <button
              onClick={goToPrevious}
              className="p-2 bg-white/50 hover:bg-white rounded-full transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6 text-gray-800"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
          </div>
          <div className="absolute inset-y-0 right-4 flex items-center z-10">
            <button
              onClick={goToNext}
              className="p-2 bg-white/50 hover:bg-white rounded-full transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6 text-gray-800"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
            {highlightImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === currentIndex
                    ? "bg-gray-800"
                    : "bg-gray-400 hover:bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
