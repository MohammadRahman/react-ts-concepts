import { useEffect, useState } from "react";

type User = {
    id: number;
    name: string;
  };

export function useFetchUsers(){
    const [users, setUser] = useState<User[] | []>([]);
    const [loading, setLoading] =useState(false);
    const [error, setError] = useState(null);

useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=> {
        if(!res.ok) throw new Error("Failed");
        return res.json();
    })
    .then((users)=> setUser(users))
    .catch(error=> setError(error.message))
    .finally(()=> setLoading(false));
},[])


    return {users, loading, error}
}