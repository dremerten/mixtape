import React from 'react';

export default function(props) {
  return(
    <li onClick={() => props.handleClick(props.trackId)}
        className='drop-down-item'
        >
      {props.buttonText}
    </li>
  );
}
