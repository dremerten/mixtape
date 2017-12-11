import React from 'react';

class GenericDropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
  }

  render() {
    let className = this.state.clicked ? 'visible' : 'hidden';
    return(
      <div className={`dropdown-container-${className}`}>
        <ul className='dropdown-list'>
          { this.props.listItems.map((Item, idx) => (
            < Item key={idx} { ...this.props} />
            ))
          }
        </ul>
      </div>
    );
  }
}

export default GenericDropDown;
