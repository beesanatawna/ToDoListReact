import React from "react";

function Child(props) {
  return (
    <div>
      <button onClick={props.inc}>+</button>
    </div>
  );
}

export default Child;
