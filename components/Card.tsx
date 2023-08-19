"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  src: string;
  title: string;
  price: string;
  keywords: string[];
};

function Card({ price, src, title, keywords }: Props) {
  const [showPrice, setShowPrice] = useState<boolean>(false);

  const toggleShowPrice = () => setShowPrice((prevState) => !prevState);

  return (
    <button
      data-testid="card"
      className="max-w-sm rounded overflow-hidden shadow-lg group text-left"
      onClick={toggleShowPrice}
    >
      <Image
        width={500}
        height={100}
        className="w-full group-hover:grayscale duration-300 h-52"
        src={src}
        alt={title}
      />

      {showPrice && (
        <div
          className="px-6 py-4 text-yellow-300"
          data-testid="price-container"
        >
          <div className="font-bold text-xl">{price}</div>
        </div>
      )}

      <div className="px-6 py-4 text-white h-25">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>

      <div className="px-6 pt-4 pb-2 h-24" data-testid="keyword-container">
        {keywords.map((keyword, idx) => (
          <span
            key={idx}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            #{keyword}
          </span>
        ))}
      </div>
    </button>
  );
}

export default Card;
