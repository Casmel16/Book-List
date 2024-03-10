import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, useDisclosure, Input, InputLeftAddon, InputGroup, Stack, Radio, RadioGroup, Divider, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Box, SliderMark } from '@chakra-ui/react';
import React, { useState } from 'react';
import { FaPlus } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import BookFormDrawer from '../BookFormDrawer';


function AddLi() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
      <li className='flex justify-center'>
        <Button ref={btnRef} onClick={onOpen} colorScheme='teal' justifyContent='center' className={`m-auto w-1/3 py-1 flex items-center rounded-full shadow-md gap-2 my-2 relative group hover:cursor-pointer transition-all hover:bg-[#333]`}>
            Add new book <FaPlus className='fill-[#fff]'/>
        </Button>
      </li>
      <BookFormDrawer isOpen={isOpen} onClose={onClose}/>
  </>
  );
}

export default AddLi;