import React, { useState, useEffect } from 'react';
import './App.css';
import CardsContainer from './components/cards-container';
import Pagination from './components/pagination';
import getAllData from '../air-table.service';


function App() {
  const [currPage, setCurrPage] = useState(1);
  const [allData, setAllData] = useState([]);
  const [lowScreenSize, setLowScreenSize] = useState(false);

  useEffect(()=>{
    getAllData(setAllData);
    setLowScreenSize(false); // kkkkkkkkkkkkkk
   },[]);
  
  return (
    <div>
      <div className='h-md bg-darkGray' />
      <CardsContainer currPage={currPage} allData={allData} lowScreenSize={lowScreenSize}/>
      {!lowScreenSize ? <Pagination allData={allData} paginate={setCurrPage} currNumber={currPage}/>: <></>}
    </div>
  );
}

export default App;
