import { useEffect, useState } from "react";
import axios from "axios";

export function useFetch(){
    const [result, setResult] = useState();
    const [errors, setErrors] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        setLoading(true);
        function fetchData(){
            setTimeout(async()=>{
                try {
                    const response = await axios.get("someurl");
                    if(response.data){
                        setResult(response.data);
                    }
                    setLoading(false);
                } catch (error: any) {
                    if(error.isAxiosError){
                        setErrors("Network error")
                    }
                   setErrors(error.message);
                   setLoading(false)
                }
            }, 1000)
        }
        fetchData();
    },[])

    return {result, loading, errors}
}