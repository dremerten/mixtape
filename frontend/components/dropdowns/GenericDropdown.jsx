import React from 'react';

// This has to be a class component because it is used as a ref.

class GenericDropDown extends React.Component {
  render() {
    const className = this.props.clicked ? 'visible' : 'hidden';

    return(
      <div className={`dropdown-container-${className} ${this.props.positionClass}`}>
        <ul className='dropdown-list'>
          { this.props.listItems.map((Item, idx) => (
            <Item key={idx} isSaved={this.props.isSaved} item={this.props.item}/>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default GenericDropDown;
