import React, { FormEvent, useState } from "react";

type Item = {
    id: number;
    name: string
}

interface ICanban{
    data: Record<string, Item[]>;
    setData: React.Dispatch<React.SetStateAction<Record<string, Item[]>>>;
}
export const CanbanBoard = ({data, setData}: ICanban) => {
    const headers = Object.keys(data);
    return (
        <div style={{ width: "100vw", height: "100vh", backgroundColor: "blueviolet", padding: "1rem" }}>
            <ul
                style={{
                    display: "grid",
                    gridTemplateColumns: `repeat(${headers.length}, 1fr)`,
                    // gridTemplateColumns: `2fr repeat(${headers.length - 1}, 1fr)`,
                    gap:"1rem"
                }}
            >
                {Object.keys(data).map((header) => (
                    <div key={header} style={{ width: "100%" }}>
                        <li
                            style={{
                                listStyle: "none",
                                border: "1px solid black",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}
                        >
                            {header}
                        </li>

                        <div style={{ width: "100%", border: "1px solid red" }}>
                            <ListItems header={header} items={data[header as keyof typeof data] || []} setData={setData}/>
                        </div>
                    </div>
                ))}
            </ul>
        </div>
    );
};

interface IListItem {
    items: { id: number; name: string }[];
    setData:  React.Dispatch<React.SetStateAction<Record<string, Item[]>>>;
    header: string;
}

function ListItems({ items, setData, header }: IListItem) {
    const [showItemForm, setShowItemForm] = useState(false);
    const [item, setItem] = useState({id: 0, name: ""})
    
    function handleSubmit(e: FormEvent){

        e.preventDefault();

        setData((prev) => ({
            ...prev,
            [header]: [...prev[header], { id: prev[header].length + 1, name: item.name }],
        }));
        setItem({id: null, name: ""});
        setShowItemForm(false)
    }
    return (
        <ul style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {items.map((item) => (
                <li style={{listStyle:'none', padding:'1rem', borderBottom:'1px solid green'}} key={item.id}>{item.name}</li>
            ))}
        <button onClick={()=> setShowItemForm(true)}>add item</button> 

        {showItemForm && (
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
            <input type="text" placeholder='name' value={item.name} onChange={(e)=> setItem((prev)=>({...prev,name: e.target.value}))}/>
            <button>submit</button>
            </form>
        )}   
        </ul>
    );
}
