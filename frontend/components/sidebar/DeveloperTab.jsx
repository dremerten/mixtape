import React from 'react';

const DeveloperTab = props => (
  <div className={`developer-tab ${props.className}`}>
    <img src={window.devImage} />
    <p>
      David Webster is a San Franscisco-based software developer with a primary focus
      on wev-development. 
    </p>
  </div>
);
