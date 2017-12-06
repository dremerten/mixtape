import React from 'react';

export default function(props) {
  return(
    <div>
      <button onClick={props.handleClick}>
        {props.buttonText}
      </button>
    </div>
  );
}
