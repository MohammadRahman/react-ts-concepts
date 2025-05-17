const MAX_LENGTH = 5;

export const Line = ({guess}) => {
    const tiles = [];

    for(let i=0; i < MAX_LENGTH; i++){
        const char = guess[i];
        tiles.push(<div key={i} style={{width:"30px", height:'30px', border: '1px solid black'}}>
            {char}
        </div>)
    }
  return (
    <div style={{display:'flex', gap:'2px'}}>{tiles}</div>
  )
}
