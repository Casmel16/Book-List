import React from 'react';
import BookLi from '../BookLi';


function Pane({title, books}) {
    const Books = books.map((b, i) => {
        return <BookLi key={i} {...b}/>;
    });
  return (
    <div className='shadow-lg gap-3 w-1/4 rounded-md'>
        <h1 className='text-center font-medium text-lg mt-2'>{title}</h1>
        <ul className='my-3'>
            {Books}
        </ul>
    </div>
  );
}

export default Pane;