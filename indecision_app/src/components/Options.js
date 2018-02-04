import React from 'react';
import Option from './Option'
const Options = (props) => {
    return (
      <div>
        <button onClick={props.handleDeleteOptions}>Remove All</button>
        {props.options.length === 0 && <p> Please Add an Option to get Started </p>}
      {
        props.options.map((option) => (
          <Option 
            key={option} 
            optionText={option}
            handleDeleteOptions = {props.handleDeleteOption}
            />
        ))
      }
      </div>
    );
  };

  export default Options;