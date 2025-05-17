import {   useMemo, useState } from 'react'



// Simulate an expensive calculation (e.g., Fibonacci)
const computeExpensiveValue = (n: number): number => {
  console.log('Computing expensive value...'); // Logs every time it runs
  if (n <= 1) return n;
  return computeExpensiveValue(n - 1) + computeExpensiveValue(n - 2);
};
// 17 times
const ReactmemouseCallback = () => {
  const [count, setCount] = useState(0);
  const [fibInput, setFibInput] = useState(10);

  const expensiveValue = useMemo(
    () => computeExpensiveValue(fibInput),
    [fibInput]
  );

  return (
    <div>
    <button onClick={() => setCount(count + 1)}>
      Re-render Parent (Count: {count})
    </button>
    <input
      type="number"
      value={fibInput}
      onChange={(e) => setFibInput(Number(e.target.value))}
    />
    <div>Fibonacci({fibInput}): {expensiveValue}</div>
  </div>
  );
};
  
  export default ReactmemouseCallback;