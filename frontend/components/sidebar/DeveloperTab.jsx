import React from 'react';

const DeveloperTab = props => {
  const className = !props.isOpen && 'hidden';

  return (
    <div className={`developer-tab ${className || ''}`}>
      <img src={staticAssets.closeButton} onClick={props.toggleInfo}></img>
      <p>
        <strong>David Webster</strong>
          {" is a San Franscisco-based software engineer with a primary focus on web-development. For more info, please follow the links below"}
      </p>
      <div>
        <a href='https://github.com/dwebster17' target='_blank'><img src={staticAssets.gitHub} /></a>
        <a href='https://www.linkedin.com/in/dwebster2/' target='_blank'><img src={staticAssets.linkedIn} /></a>
      </div>
    </div>
  );
};

export default DeveloperTab;
