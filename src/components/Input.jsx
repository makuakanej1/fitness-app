import React from 'react';

const Input = ({ type, id, value, onChange, placeholder }) => {
  return (
    <>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default Input;
