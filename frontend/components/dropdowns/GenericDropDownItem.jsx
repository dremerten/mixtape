import React from 'react';

export default function(props) {
  return(
    <li onClick={props.handleClick}
        className='drop-down-item'
        >
      {props.buttonText}
    </li>
  );
}
