import React, { useCallback } from "react";
import { useDebounce } from "../debounce/useDebounce";
import { arr, colors } from "../../__mock/data";

const Search = () => {
  const [searchTerm, setSearchTerm] = React.useState<string>("");
  const [keySrokeCount, setKeyStrokeCount] = React.useState<number>(0);
  const deboucedText = useDebounce(searchTerm);
  const [clickedItem, setClickedItem] = React.useState<string>("");


  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.value) {
      setKeyStrokeCount((prev) => prev + 1);
    } else {
      setKeyStrokeCount(0);
    }
    setSearchTerm(e.target.value);
  }

  const debouncedSerach = arr.filter((item) =>
    item.toLowerCase().includes(deboucedText.toLowerCase())
  );

  function getClickedItem(item: string) {
    setClickedItem(item);
  }

    function getColor(index: number) {
        if(clickedItem === arr[index]) {
            return colors[index];
        }
        return "lightgreen"
    }

    
const highlightMatches = useCallback((item: string, searchTerm: string)=>{
    const searchChars = searchTerm.toLowerCase().split("");
    return item.split("").map((char, idx)=>{
        const lowerChar = char.toLowerCase();
        if(searchChars.includes(lowerChar)) {
            return (
                <span key={idx} style={{color: "red", fontWeight: "bold"}}>
                    {char}
                </span>
            )
        }
        return <span key={idx}>{char}</span>
    })
},[])

  return (
    <div>
      <div>
        <input type="text" value={searchTerm} onChange={handleChange} />
        <p>Key Stroke Count: {keySrokeCount}</p>
        <p>Search Term: {searchTerm}</p>
        <p>Debounced Search Term: {deboucedText}</p>
        <p>Clicked Item: {clickedItem}</p>
      </div>
      <div>
        <ul style={{ display: "flex", gap: "10px" }}>
          {debouncedSerach.map((item, index) => (
            <li
              key={index}
              style={{
                listStyle: "none",
                padding: "10px",
                backgroundColor: getColor(index),
                borderRadius: "5px",
                cursor: "pointer",
              }}
              onClick={() => {
                getClickedItem(item);
              }}
            >
              {highlightMatches(item, searchTerm)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Search;
