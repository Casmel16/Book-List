import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, useDisclosure, Input, InputLeftAddon, InputGroup, Stack } from '@chakra-ui/react';
import React from 'react';
import { FaPlus } from "react-icons/fa";



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

      <Drawer
      isOpen={isOpen}
      placement='right'
      onClose={onClose}
      finalFocusRef={btnRef}
      >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Add a new book</DrawerHeader>

        <DrawerBody>

        <Stack spacing={4}>
          <InputGroup size='md'>
            <InputLeftAddon>
              Title
            </InputLeftAddon>
            <Input placeholder='e.g. "Robinson Crusoe"' />
          </InputGroup>

          <InputGroup size='md'>
            <InputLeftAddon>
              Author
            </InputLeftAddon>
            <Input placeholder='e.g. "Daniel Defoe"' />
          </InputGroup>

          <InputGroup size='sm'>
            <InputLeftAddon>
              Year
            </InputLeftAddon>
            <Input type='number' placeholder='☝🤓☝🤓☝🤓☝🤓' />
          </InputGroup>

          <InputGroup size='sm'>
            <InputLeftAddon>
              Pages
            </InputLeftAddon>
            <Input type='number' placeholder='☝🤓☝🤓☝🤓☝🤓' />
          </InputGroup>
        </Stack>

        </DrawerBody>
  
        <DrawerFooter>
          <Button variant='outline' mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button colorScheme='blue'>Save</Button>
        </DrawerFooter>
      </DrawerContent>
      </Drawer>
  </>
  );
}

export default AddLi;