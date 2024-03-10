import React from 'react';
import Navbar from '../Navbar';

function Template({children}) {
  return (
    <>
    <Navbar/>
    <section className='m-auto w-5/6 py-2'>
      {children}
    </section>
    </>
  );
}

export default Template;