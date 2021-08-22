/* eslint-disable no-plusplus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import config from '../../config'

const Pagination = ({allData, paginate, currNumber})=> {
  const [allPages, setAllPages] = useState([]);
  const [shownPages, setShownPages] = useState([]);

  useEffect(()=>{
    const pageNumbers = [];
    for(let i =1; i<= Math.ceil(allData.length / config.itemsPerPage); i++){
        pageNumbers.push(i);
    }
    setAllPages(pageNumbers);
    if(pageNumbers.length > 3) setShownPages(pageNumbers.slice(0,3));
    else setShownPages(pageNumbers);
  },[allData]);

  const onPageBack = () => {
    if(shownPages[0]===1) return;
    const backPages = shownPages.map((page)=> page-1);
    setShownPages(backPages);
    paginate(currNumber-1);
  }

  const onPageNext = () => {
    if(shownPages[shownPages.length-1]===allPages[allPages.length-1]) return;
    const nextPages = shownPages.map((page)=> page+1);
    setShownPages(nextPages);
    paginate(currNumber+1);
  }


  return (
    <div className='flex justify-center'>
      <nav className='fixed bottom-0 flex flex-row mb-2 self-center'>
       <div className='bg-lightGray w-6 h-6 text-center border-2 border-lightGray'>
        <a onClick={()=>onPageBack()} herf="!#" >{'<'}</a>
      </div>
        {shownPages.map(number => (
          <div key={number} className='w-6 h-6 text-center border-2 border-lightGray'>
            <a onClick={()=>paginate(number)} herf="!#" >
              {number}
            </a>
         </div>
        ))}
        <div className='bg-lightGray w-6 h-6 text-center border-2 border-lightGray'>
          <a onClick={()=>onPageNext()} herf="!#" >{'>'}</a>
        </div>
      </nav>
    </div>
  );
};

Pagination.propTypes = {
  allData: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  paginate: PropTypes.func.isRequired,
  currNumber: PropTypes.number.isRequired,
};

export default Pagination;
