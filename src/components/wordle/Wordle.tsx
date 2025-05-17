import { useEffect, useState } from 'react';
import { useWords } from './useWord'
import { Line } from './Line';

export const Wordle = () => {
    const [guesses, setGuesses] = useState(Array(6).fill(null));
    const {solution, loading} = useWords();


// now need to handle the key press.

useEffect(()=>{
    function handleKeyType(event){
        
    }

    window.addEventListener('keydown', handleKeyType);

    return()=> window.removeEventListener('keydown', handleKeyType);
},[])






    if(loading) return <h1>Loading...</h1>
  return (
    <div style={{ display: "flex", flexDirection: "column", gap:'2px'}}>{
        guesses.map((guess, idx)=>(
            <div key={idx}>
                <Line guess={guess ?? ""}/>
            </div>
        ))
        }
    </div>
  )
}
