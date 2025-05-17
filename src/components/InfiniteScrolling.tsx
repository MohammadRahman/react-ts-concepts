import { ChangeEvent, useCallback, useRef, useState } from 'react'
import { useSerachBooks } from './useSearchBooks';

/*
infinite scrolling--> from search
Steps:
1. make the layout.
2. make api call. 
3. render all the results.
4. reject unnecessary network calls.
5. observe the scrolling and intersect 

*/ 
const InfiniteScrolling = () => {
const [query, setQuery] = useState("");
const [pageNum, setPageNum] = useState(1);

const {loading, books, hasMore} = useSerachBooks({query, pageNum});

const observer = useRef<IntersectionObserver | null>(null);
const observerRef = useCallback((node: Element | null)=>{
    if(loading) return;
    if(observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries)=>{
        if(entries[0].isIntersecting && hasMore){
            setPageNum(prev=> prev + 1)
        }
    });
    if(node) observer.current.observe(node);
},[loading, hasMore])
function handleChange(e: ChangeEvent<HTMLInputElement>){
    setQuery(e.target.value);
    setPageNum(1)
}

  return (
    <div style={{display:'flex', flexDirection:"column", gap:"1rem", paddingTop:"2rem", paddingLeft:"2rem"}}>
        <input style={{width:"200px", padding:"1rem"}} type="search" placeholder='type here' value={query} onChange={handleChange} />

        {loading && <p>Loading...</p>}
       <ul  style={{display:'grid', gridTemplateColumns: "repeat(6, 1fr)", gap:'4px', width:'auto'}}>
            {books.map((book, idx)=>{ 
                if(books.length === idx + 1){
                    return <li ref={observerRef} key={book} style={{border:'1px solid black', overflow:'hidden', width:"fit-content", padding:'10px', listStyle:'none'}}>{book}</li>
                }else{
                    return <li key={book} style={{border:'1px solid black', width:"fit-content",overflow:'hidden', padding:'10px', listStyle:'none'}}>{book}</li>
                }
                
            })}
        </ul> 
        {loading && <p>Loading...</p>}
    </div>
  )
}

export default InfiniteScrolling;