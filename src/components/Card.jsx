import React from 'react';
import { MdCurrencyRupee } from 'react-icons/md';
import { IoStar } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

export const Card = ({ item }) => {
  const navigate = useNavigate();

  const {   // destructuring data
    id, 
    name, 
    originalPrice, 
    discountPrice, 
    image_1, 
    description, 
    rating, 
    discount,
  } = item;

  return (
    <div className="w-96 border-[1px] border-black rounded-lg p-2">
      <img 
        onClick={() => navigate(`/men/details/${id}`)} // Navigate to details page with ID
        className="rounded-lg h-[300px] w-[366px]" 
        src={image_1} 
        alt="Error" 
      />
      <h1 className="text-2xl font-semibold mt-4 mb-2">{name}</h1>
      <p className="text-lg truncate">{description}</p>
      <div className="flex items-center gap-6 my-2">
        <p className="flex items-center gap-[2px] font-bold text-2xl">
          <MdCurrencyRupee />
          <span>{discountPrice}</span>
        </p>
        <span className="bg-black text-white py-1 px-2 rounded-lg">
          {discount}%
        </span>
      </div>
      <div className="flex items-center line-through">
        <MdCurrencyRupee />
        <p className="text-xl">{originalPrice}</p>
      </div>
      <div className="flex items-center gap-2 text-xl my-2">
        <IoStar className="text-yellow-500" />
        <span>{rating}</span>
      </div>
    </div>
  );
};
