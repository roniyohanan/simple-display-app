import React from 'react';
import Card from './card';

function CardsContainer({items}) {
  return (
    <div className='grid-rows-3'>
      {items.map((item)=><Card/>)}
    </div>
  );
}

export default CardsContainer;