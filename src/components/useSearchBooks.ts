/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { Canceler } from "axios";
import { useEffect, useState } from "react";
type Props = {
    query: string;
    pageNum: number;
}
export function useSerachBooks({query, pageNum}: Props){
    const [books, setBooks] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [hasMore, setHasMore] = useState(false);
    const [error, setError] = useState(false);
    
    useEffect(()=>{setBooks([])},[query])

    useEffect(()=>{
         let cancel: Canceler;
        setLoading(true)
        axios({
            method: "Get",
            url: "http://openlibrary.org/search.json",
            params: {q: query, page: pageNum},
            cancelToken: new axios.CancelToken(c=> cancel = c)
        }).then((res)=> {
            console.log(res.data)
            setBooks(prev=>{
                return [...new Set([...prev, ...res.data.docs.map((b: Record<string, string>)=> b.title)])];
            });
            setHasMore(res.data.docs.length > 0);
            setLoading(false);
        }).catch(e=>{
            if(axios.isCancel(e)) return;
            setError(true)
        });
        return ()=> cancel();
    },[query, pageNum]);

    return {loading, books, hasMore, error}
}