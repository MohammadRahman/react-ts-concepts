import { useEffect, useState } from "react";
import { getWords } from "../../api/wordle";

export function useWords(){
    const [solution, setSolution] = useState<string | "">("");
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(()=>{
        async function fetchWords(){
            setLoading(true);
            try {
                const response = await getWords();
                setSolution(response[Math.floor(Math.random() *response.length)]);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        }
        fetchWords()
    },[])

    return {solution, loading};
}