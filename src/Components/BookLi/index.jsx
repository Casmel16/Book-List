import React from 'react';
import { RiDraggable } from "react-icons/ri";
import { FaStar } from "react-icons/fa";
import { FaPercentage } from "react-icons/fa";
function BookLi({title, author, rating, current_page, pages}) {

  const Rating = !!rating 
  ? <span className='flex absolute bottom-2 right-2 bg-yellow-500 p-[1px] rounded-full px-1 items-center gap-[2px]'>
    <FaStar className='fill-white text-xs'/>
    <p className='text-xs text-white font-semibold'>{rating}</p>
  </span>
  : null;
  
  const Advance = !!current_page && !rating 
  ? <span className='flex absolute bottom-2 right-2 bg-blue-500 p-[1px] rounded-full px-1 items-center gap-[2px]'>
    <FaPercentage className='fill-white text-xs'/>
    <p className='text-xs text-white font-semibold'>{Math.round(current_page * 1000 / pages)/10 }</p>
  </span>
  : null;

  const more_space = !!rating || !!current_page;
  return (
    <li className={`m-auto w-10/12 py-1 flex items-center rounded-sm shadow-md gap-2 my-2 relative ${more_space && 'pb-3'}`}>
      <RiDraggable className='text-xl'/>
      <span>
        <h2 className=''>{title}</h2>
        <h2 className='font-light text-xs mt-[-5px]'>{author}</h2>
      {[Rating, Advance]}
      </span>
    </li>
  );
}

export default BookLi;