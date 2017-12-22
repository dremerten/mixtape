import React from 'react';
import MusicIndexItem from './music_index_item';
import { withRouter } from 'react-router-dom';

const GenericMusicIndex = (props) => {
  return(
    <ul className='playlist-items'>
      { props.indexItems.map(item => (
        <MusicIndexItem
          { ...props }
          key={item.id}
          item={item}
          itemType={props.itemType}
          />
        )
      ) }
    </ul>
  );
};

export default withRouter(GenericMusicIndex);
