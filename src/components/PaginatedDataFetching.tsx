import { useState } from "react"
import { useDataFetch } from "./useDataFetch";


const LIMIT = 6;

export const PaginatedDataFetching = () => {
    const [page, setPage] = useState(1);
    const {posts, loading, totalPages, totalCount} = useDataFetch(page, LIMIT);
    
    const startPost = (page - 1) * LIMIT + 1;
    const endPost = Math.min(page * LIMIT, posts.length + (page - 1) * LIMIT);

    function handleClick(){
        if(page >= totalPages) return;
        setPage(prev=>prev+1)
    }
    function handlePrevious(){
        if(page > 1) setPage(prev=>prev -1)
    }
    if(loading) return <p>Loading...</p>
  return (
    <>
    <button onClick={handleClick}>next</button>
    <span>{startPost} to {endPost} of {totalCount}</span>
    <button onClick={handlePrevious}>prev</button>
    <ul>
        {posts.map(post=> (
            <li key={post.id}>{post.title}</li>
        ))}
    </ul>
    </>
  )
}
