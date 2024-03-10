import React, { useRef } from 'react';
import { RiDraggable } from "react-icons/ri";
import { FaStar } from "react-icons/fa";
import { FaPercentage } from "react-icons/fa";
import { Progress, useDisclosure } from '@chakra-ui/react';
import BookFormDrawer from '../BookFormDrawer';
function BookLi({title, author, rating, current_page, pages, start_date, end_date, year, status, collection}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const Rating = !!rating
  ? <span className='flex absolute bottom-2 right-2 bg-yellow-500 p-[1px] rounded-full px-1 items-center gap-[2px]'>
    <FaStar className='fill-white text-xs'/>
    <p className='text-xs text-white font-semibold'>{rating}</p>
  </span>
  : null;
  const percentage = Math.round(current_page * 1000 / pages)/10;
  const Advance = !!current_page && !rating
  ? <>
    <span className='flex absolute bottom-2 right-2 bg-blue-500 p-[1px] rounded-full px-1 items-center gap-[2px]'>
      <FaPercentage className='fill-white text-xs'/>
      <p className='text-xs text-white font-semibold'>{ percentage }</p>
    </span>
    <Progress value={percentage} position={'absolute'} bottom={0} right={0} width={'100%'} height={'5px'} color={'rgb(59, 130, 246)'}/>
  </>
  : null;
  const more_space = !!rating || !!current_page;
  const btnRef = useRef()

  return (
    <>
      <li className={`m-auto w-10/12 py-1 flex items-center rounded-sm shadow-md gap-2 my-2 relative ${more_space && 'pb-3'} cursor-pointer`} onClick={onOpen}>
        <RiDraggable className='text-xl cursor-grab'/>
        <span>
          <h2 className=''>{title}</h2>
          <h2 className='font-light text-xs mt-[-5px]'>{author}</h2>
          {Rating}
          {Advance}
        </span>
      </li>
      <BookFormDrawer btnRef={btnRef} onClose={onClose} isOpen={isOpen} bookData={{title, author, rating, current_page, pages, start_date, end_date, year, status, collection}}/>
    </>
  );
}

export default BookLi;