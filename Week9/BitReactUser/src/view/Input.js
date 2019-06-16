import React from "react";

const InputButton = props => {
  return (
    <div className="inputDiv">
      <i className="fas fa-search" />
      <input
        type="text"
        value={props.value}
        placeholder="Search users"
        className="input"
        onChange={props.changesOnInput}
      />
    </div>
  );
};

export default InputButton;
