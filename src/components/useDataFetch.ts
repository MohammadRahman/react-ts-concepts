import axios from "axios";
import { useEffect, useState } from "react";

interface Post {
    id: number;
    title: string;
    body: string;
    userId: number
  }

export function useDataFetch(page: number, limit: number){
    const [posts, setPosts] = useState<Post[] | []>([]);
    const [loading, setLoading] = useState(true);
    const [totalPages, setTotalPages] = useState(0);
    const [totalCount, setTotalCount] = useState(0);

useEffect(()=>{
    setLoading(true);
},[page])

    useEffect(()=>{
        setLoading(true);
        axios({
            method: "GET",
            url: "https://jsonplaceholder.typicode.com/posts",
            params:{_page: page, _limit: limit},
        }).then(res=>{
            const totalPosts = res.headers['x-total-count'];
            setTotalCount(totalPosts);
            const totalPages = Math.ceil(totalPosts / limit);
            setTotalPages(totalPages);
            setPosts(res.data);
            setLoading(false);
        }).catch((e)=>{
            return e;
        }).finally(()=>{
            setLoading(false);
        });
    },[page, limit])

    return {posts, loading, totalPages, totalCount}
}