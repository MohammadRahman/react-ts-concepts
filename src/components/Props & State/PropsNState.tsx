import { useState } from "react"



const PropsNState = ({maxCount}: {maxCount?: number}) => {
    const [count, setCount] = useState<number>(0);

    function onIncrement(){
        if(maxCount && count > maxCount){
            console.log("return value exceeded");
            return;
        }
        setCount(prev=> prev+1);
    }

  return (
    <div>
        <button type="button" onClick={onIncrement}>increment</button>
       current value: {maxCount && count > maxCount ?  "can not go over maxCount": count}
       {maxCount && count > maxCount && (
        <button type="button" onClick={()=> setCount(0)}>reset</button>
       )}
    </div>
  )
}

export default PropsNState