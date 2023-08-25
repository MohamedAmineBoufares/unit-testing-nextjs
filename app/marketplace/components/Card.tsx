"use client";

import Image from "next/image";
import { useState } from "react";

import { useStore } from "@store/index";

type Props = {
  src: string;
  title: string;
  price: string;
  keywords: string[];
};

function Card({ price, src, title, keywords }: Props) {
  const [showPrice, setShowPrice] = useState<boolean>(false);

  const toggleShowPrice = () => setShowPrice((prevState) => !prevState);

  const { add, favs } = useStore((state) => state);

  return (
    <div
      className="max-w-sm rounded overflow-hidden shadow-lg text-lef"
      data-testid="card"
    >
      <button
        data-cy={`img-btn-${title}`}
        data-testid="img-btn"
        className="w-full"
        onClick={toggleShowPrice}
      >
        <Image
          width={500}
          height={100}
          className="w-full hover:grayscale duration-300 h-52"
          src={src}
          alt={title}
        />
      </button>

      {showPrice && (
        <div
          data-cy={`price-container-${title}`}
          data-testid="price-container"
          className="px-6 py-4 text-yellow-300"
        >
          <div className="font-bold text-xl">{price}</div>
        </div>
      )}

      <div className="px-6 py-4 text-white h-25">
        <span className="flex justify-between items-center mb-2">
          <p className="font-bold text-xl">{title}</p>

          <button
            data-cy={`fav-btn-${title}`}
            data-testid={`fav-btn-${title}`}
            onClick={() => add(title)}
            className={`bg-white text-black rounded-sm p-1 px-2 hover:bg-yellow-300 duration-300 ${
              favs.includes(title) && "bg-yellow-300"
            }`}
          >
            <p className="text-sm">Add to favs</p>
          </button>
        </span>
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
    </div>
  );
}

export default Card;
