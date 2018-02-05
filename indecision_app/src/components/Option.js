import React from 'react';

const Option = (props) => (
      <div>
        {props.optionText}
        <button
          className="button button--link"
          onClick={(e) => {
            props.handleDeleteOptions(props.optionText);
          }}
        >
         Remove
        </button>
      </div>
    );

  export default Option;