import React from 'react';
import { withRouter } from 'react-router-dom';

const GenericMusicIndex = (props) => {
  const { IndexItem, indexItems } = props;

  return(
    <ul className='playlist-items'>
      { indexItems.map(item => (
        <IndexItem
          { ...props }
          key={item.id}
          item={item}
          />
        )
      ) }
    </ul>
  );
};

export default withRouter(GenericMusicIndex);
