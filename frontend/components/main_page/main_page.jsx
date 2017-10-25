import React from 'react';

const MainPage = (props) => {
  return(
    <div>
      <h1>MUSIC</h1>
      <h2>Hello, {props.currentUser.name}!</h2>
      <button onClick={props.logout}>LOGOUT</button>
    </div>
  );
}

export default MainPage;
