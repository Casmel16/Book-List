import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, useDisclosure, Input, InputLeftAddon, InputGroup, Stack, Radio, RadioGroup, Divider, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Box, SliderMark } from '@chakra-ui/react';
import { useState } from 'react';
import { FaStar } from "react-icons/fa";


function BookFormDrawer({isOpen, btnRef, onClose, bookData = {}}) {
  const [readState, setReadState] = useState(bookData.status ? bookData.status : 'To Read');
    const [title, setTitle] = useState(bookData.title);
    const [author, setAuthor] = useState(bookData.author);
    const [year, setYear] = useState(bookData.year);
    const [pages, setPages] = useState(bookData.pages);
    const [rating, setRating] = useState(bookData.rating ? bookData.rating : 0);
    const [startDate, setStartDate] = useState(bookData.start_date);
    const [collection, setCollection] = useState(bookData.collection);
    const [currentPage, setCurrentPage] = useState(bookData.current_page);
    const [endDate, setEndDate] = useState(bookData.end_date);
    const statusQuestions = {
        'To Read': <></>,
        'Reading': <>
              <InputGroup size='md'>
                <InputLeftAddon>
                  Start Date
                </InputLeftAddon>
                <Input type='date' value={startDate} onChange={ e => setStartDate(e.target.value)}/>
              </InputGroup>
    
              <InputGroup size='sm'>
                <InputLeftAddon>
                  Current Page
                </InputLeftAddon>
                <Input type='number' placeholder='e.g. "10"' value={currentPage} onChange={ e => setCurrentPage(e.target.value)}/>
              </InputGroup>
        </>,
        'Read': <>
              <InputGroup size='md'>
                <InputLeftAddon>
                  Start Date
                </InputLeftAddon>
                <Input type='date' value={startDate} onChange={ e => setStartDate(e.target.value)}/>
              </InputGroup>
    
              <InputGroup size='md'>
                <InputLeftAddon>
                  End Date
                </InputLeftAddon>
                <Input type='date' value={endDate} onChange={ e => setEndDate(e.target.value)}/>
              </InputGroup>
              <span className=''>
                <h3 className='text-xl kaushan'>Rating ({ rating * 20 }%)</h3>
                <Slider aria-label='slider-ex-4' value={rating*20} defaultValue={30} onChange={val => setRating(val/20)}>
                  <SliderMark value={25} marginTop={'5px'} textAlign={'center'}>
                    <span className="kaushan">25%</span>
                  </SliderMark>
                  <SliderMark value={50} marginTop={'5px'} textAlign={'center'}>
                    <span className="kaushan">50%</span>
                  </SliderMark>
                  <SliderMark value={75} marginTop={'5px'} textAlign={'center'}>
                    <span className="kaushan">75%</span>
                  </SliderMark>
                  <SliderTrack bg='yellow.100'>
                    <SliderFilledTrack bg='gold' />
                  </SliderTrack>
                  <SliderThumb boxSize={6}>
                    <Box color='gold' as={FaStar} />
                  </SliderThumb>
                </Slider>
              </span>
        </>,
      };
  return (
    <Drawer
      isOpen={isOpen}
      placement='right'
      onClose={onClose}
      finalFocusRef={btnRef}
      >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader className='kaushan' fontSize={'25px'} fontWeight={'regular'}>Add a new book</DrawerHeader>

        <DrawerBody>
        <h2 className='text-xl kaushan mb-2'>Technical Data</h2>
        <Stack spacing={4}>
          <InputGroup size='md'>
            <InputLeftAddon>
              Title
            </InputLeftAddon>
            <Input placeholder='e.g. "Robinson Crusoe"' value={title} onChange={ e => setTitle(e.target.value)}/>
          </InputGroup>

          <InputGroup size='md'>
            <InputLeftAddon>
              Author
            </InputLeftAddon>
            <Input placeholder='e.g. "Daniel Defoe"' value={author} onChange={ e => setAuthor(e.target.value)}/>
          </InputGroup>

          <InputGroup size='sm'>
            <InputLeftAddon>
              Year
            </InputLeftAddon>
            <Input placeholder='e.g. "1719"' type='number' value={year} onChange={ e => setYear(e.target.value)}/>
          </InputGroup>

          <InputGroup size='sm'>
            <InputLeftAddon>
              Pages
            </InputLeftAddon>
            <Input type='number' placeholder='e.g. "500"' value={pages} onChange={ e => setPages(e.target.value) }/>
          </InputGroup>

          <InputGroup size='sm'>
            <InputLeftAddon>
              Collection
            </InputLeftAddon>
            <Input placeholder='e.g. "Clásicos para la vida"' type='text' value={collection} onChange={ e => setCollection(e.target.value)}/>
          </InputGroup>

        </Stack>
        <Divider marginY={'10px'}/>
        
        <h2 className='text-xl kaushan mb-2'>Reading Status Data</h2>
        <RadioGroup marginTop={'10px'} value={readState} onChange={e => setReadState(e)}>
          <Stack direction='row'>
            <Radio value='To Read'>To Read</Radio>
            <Radio value='Reading'>Reading</Radio>
            <Radio value='Read'>Read</Radio>
          </Stack>
        </RadioGroup>

        <Stack marginTop={'10px'} spacing={2}>
          { statusQuestions[readState] }
        </Stack>

        </DrawerBody>
  
        <DrawerFooter>
          <Button variant='outline' mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button colorScheme='blue' onClick={() => console.table({title, author, year, pages, readState, startDate, endDate, rating, collection })}>Save</Button>
        </DrawerFooter>
      </DrawerContent>
      </Drawer>
  );
}

export default BookFormDrawer;