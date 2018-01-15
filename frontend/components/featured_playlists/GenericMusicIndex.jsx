import React from 'react';
import { withRouter } from 'react-router-dom';

const GenericMusicIndex = (props) => {
  const { IndexItem } = props;

  return(
    <ul className='playlist-items'>
      { props.indexItems.map(item => (
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
