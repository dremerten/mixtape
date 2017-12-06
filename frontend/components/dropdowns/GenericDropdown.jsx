import React from 'react';

export default function(props) {
  return(
    <div className='dropdown-container'>
      <ul className='dropdown-list'>
        { props.listItems }
      </ul>
    </div>
  );
}



// TrackDropDown
import REact



const mapStateToProps = (state, ownProps) => ({
  listItems: [

  ]
})

const dd = ({ listItems }) => <GenericDropDown listItems={ listItems } />

export default connect(mSTP)(

)
