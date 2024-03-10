import React from 'react';
import Pane from '../Pane';

function ReadPanes({ paneData }) {
    const Panes = Object.entries(paneData).map(([key, val]) => {
        return <Pane key={key} title={key} books={val}/>;
    });
  return (
    <section className='flex justify-around'>
        {Panes}
    </section>
  );
}

export default ReadPanes;