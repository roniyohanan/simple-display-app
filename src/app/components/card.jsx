import React from 'react';
import PropTypes from 'prop-types';

const Card = ({headline, subhead, image})=> (
      <div className='shadow-default rounded-default w-lg'>
        <div>
        <img className='h-lg w-lg rounded-default' src={image} alt='' />
        </div>
        <p className='text-gray text-base m-2' >{headline}</p>
        <p className='text-lightGray text-base m-2 pb-3'>{subhead}</p>
      </div>
  );

Card.propTypes = {
  headline: PropTypes.string.isRequired,
  subhead: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Card;
