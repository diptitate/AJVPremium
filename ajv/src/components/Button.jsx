import React from "react";

const Button = (props) => {
  return (
    <div>
      <button
        className={` ${props.backgroundColor} text-ride-400 rounded-full px-8 py-2 bg-transparent hover:bg-blue-500 font-semibold hover:text-white border border-ride-500 hover:border-transparent`}
      >
        {props.title}
      </button>
    </div>
  );
};

export default Button;