import React from 'react';

const Input = ({ type=null, className=null, payload=null, field=null }) => {
  return (
    <>
      <input
        type={type}
        className={className}
        value={payload}
        {...field}
      />
    </>
     
  );
};

export default Input;
