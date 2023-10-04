import React from 'react';

function Button({ className, payload ,type}) {
  return (
    <button className={className} type={type}>
      {payload}
    </button>
  );
}

export default Button;
