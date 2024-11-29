import React from 'react';
import { useParams } from 'react-router-dom';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { IoCartOutline } from 'react-icons/io5';
import { LuIndianRupee } from 'react-icons/lu';
import Data from '../index'; // Import the data array

export const SneakersDetails = () => {
  const { id } = useParams(); // Extract ID from URL
  const item = Data.find((sneaker) => sneaker.id === parseInt(id)); // Find the sneaker with matching ID

  if (!item) {
    return <p>Item not found</p>; // Handle invalid ID
  }

  const { name, originalPrice, discountPrice, image_1, image_2, image_3, image_4, description, discount } = item;

  return (
    <div className='py-20 px-16 flex gap-28'>
      <div>
        <div>
          <img 
            className='h-[445px] w-[445px] rounded-xl'
            src={image_1} 
            alt="Error" 
          />
        </div>
        <div className='flex items-center gap-6 my-8'>
          <img className='h-[88px] w-[88px] rounded-xl' src={image_1} alt="Error" />
          <img className='h-[88px] w-[88px] rounded-xl' src={image_2} alt="Error" />
          <img className='h-[88px] w-[88px] rounded-xl' src={image_3} alt="Error" />
          <img className='h-[88px] w-[88px] rounded-xl' src={image_4} alt="Error" />
        </div>
      </div>

      <div className='max-w-[445px]'>
        <p className='text-[#FF7E1B] text-xl font-semibold'>Sneaker Company</p>
        <h1 className='text-5xl font-semibold my-5'>{name}</h1>
        <p className='text-lg text-[#B6BCC8]'>{description}</p>

        <div className='flex items-center gap-5 my-5'>
          <p className='text-4xl font-bold flex items-center'>
            <span><LuIndianRupee /></span>
            {discountPrice}
          </p>
          <p className='text-[#FF7E1B] bg-[#FFEEE2] p-2 rounded-xl'>{discount}%</p>
        </div>

        <div className='flex items-center text-2xl text-[#B6BCC8] line-through font-semibold'>
          <span><LuIndianRupee /></span>
          <p>{originalPrice}</p>
        </div>

        <div className='flex items-center gap-4 my-8'>
          <div className='flex items-center text-xl text-[#FF7E1B] gap-8 font-bold bg-[#F6F8FD] rounded-lg py-4 px-6'>
            <button><FaMinus /></button>
            <p className='text-black'>0</p>
            <button><FaPlus /></button>
          </div>

          <button className='flex items-center text-white bg-[#B6BCC8] gap-5 text-xl font-semibold py-4 px-12 rounded-lg'>
            <IoCartOutline className='text-2xl'/>
            <p>Add to Cart</p>
          </button>
        </div>
      </div>
    </div>
  );
};