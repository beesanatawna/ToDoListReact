import React, { useState } from "react";
import Child from "./child";
function Parent() {
  let [counter, setCounter] = useState(0);
  function increment() {
    setCounter(counter++);
    console.log(counter);
  }
  return (
    <div>
      {counter}
      <Child inc={increment} />
    </div>
  );
}

export default Parent;
