import React from "react";

type ChildProps = {
  onClick: ()=> void;
}

const Child = React.memo(({onClick}:ChildProps) => {
  console.log("Child rendered"); // Logs every time Parent re-renders
  return <button onClick={onClick}>Click Me</button>;
});
export default Child;