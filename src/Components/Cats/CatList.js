import React from "react";

const CatList = (props) => {
  return (
    <ul>
      {props.cats.map((cat) => {
        return <li>{cat}</li>;
      })}
    </ul>
  );
};

export default CatList;
