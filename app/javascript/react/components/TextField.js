import React, { Component } from 'react';

const TextField = props => {
  return(
    <div>
      <h3>{props.label}</h3>
      <input type="text" value={props.value} onChange={props.onChange}/>
    </div>
  );
};

export default TextField;
