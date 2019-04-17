import React from "react";

const AppTitle = props => {
  return (
    <div>
      <h3>{props.name}</h3>
      <h1> {props.title}</h1>
    </div>
  );
};

export default AppTitle;
