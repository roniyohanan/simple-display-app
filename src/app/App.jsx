import React, { useState, useEffect } from 'react';
import './App.css';
import CardsContainer from './components/cards-container';
import Pagination from './components/pagination';
import getAllData from '../air-table.service';
import config from '../config';
import useWindowDimensions from '../useWindowDimensions';


function App() {
  const [currPage, setCurrPage] = useState(1);
  const [allData, setAllData] = useState([]);
  const [lowScreenSize, setLowScreenSize] = useState(false);
  const {width} = useWindowDimensions();

  useEffect(()=>{
    getAllData(setAllData);
    if(width<config.minWidth) setLowScreenSize(true);
    else setLowScreenSize(false);
   },[width]);
  
  return (
    <div>
      <div className='h-md bg-darkGray' />
      <CardsContainer currPage={currPage} allData={allData} lowScreenSize={lowScreenSize}/>
      {!lowScreenSize ? <Pagination allData={allData} paginate={setCurrPage} currNumber={currPage}/>: <></>}
    </div>
  );
}

export default App;
