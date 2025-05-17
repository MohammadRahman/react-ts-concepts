import { useState } from "react"


const Counter = () => {
    const [count, setCount] = useState<number>(0);

    function increment(){
        setCount(prev=> prev+1);
    }
    function decrement(){
        setCount((prev: number)=> prev === 0 ? 0 : prev -1)
    }
    function reset(){
        setCount(0);
    }
  return (
    <>
    <p>Count: {count}</p>
    <button onClick={increment}>inc</button>
    <button onClick={decrement} disabled={count === 0}>dec</button>
    <button onClick={reset}>reset</button>
    </>
  )
}

export default Counter