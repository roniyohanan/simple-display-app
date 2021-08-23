/* eslint-disable dot-notation */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Card from './card';
import config from '../../config'

function CardsContainer({currPage, allData, lowScreenSize}) {
  const [dataPerPage, setDataPerPage]= useState([]);

  useEffect(()=>{
    if(!lowScreenSize){
      const lastItem = currPage * config.itemsPerPage; 
      const displayData = allData.slice(lastItem - config.itemsPerPage, lastItem);
      setDataPerPage(displayData); 
    } else setDataPerPage(allData);
  },[currPage, allData]);

  return (
    <div className='mt-8 grid grid-cols-default gap-8 justify-items-center'>
      {dataPerPage.map((item)=><Card key={item.id} headline={item.fields['Headline']}
       subhead={item.fields['Sub-headline']} image={item.fields['Header image']} />)}
    </div>
  );
}


CardsContainer.propTypes = {
  currPage: PropTypes.number.isRequired,
  allData: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  lowScreenSize: PropTypes.bool.isRequired,
};

export default CardsContainer;