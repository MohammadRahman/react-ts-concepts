import { createContext, FormEvent, ReactNode, useContext, useMemo, useState } from "react";

interface Todo {
    id: string;
    text: string;
    completed: boolean;
  }

  export function Todos(){
      const {todos} = useTodoContext();
    const memoisedTodos = useMemo(()=> todos, [todos]);
    const [showForm, setShowForm] = useState(false);
    return(
        <div style={{display: 'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
            {todos?.length === 0 &&(
                <div style={{display:'flex', flexDirection:'column', gap:'1rem'}}>
                <p>you do not have anything to do.</p>
                <button onClick={()=> setShowForm(true)}>create todo</button>
                </div>
            )}
            {showForm && <CreateTodoForm/>}
            <ul className="todo_list">
                {memoisedTodos?.map(todo=> <Todo key={todo.id} {...todo}/>)}
            </ul>
        </div>
    )
  }

  function CreateTodoForm(){
    const [text, setText] = useState("");
    const {addTodo, loading} = useTodoContext();
    function submitHandler(e: FormEvent){
        e.preventDefault();
        addTodo({id: crypto.randomUUID(), text, completed: false})
        setText("");

    }
    return(
        <div style={{width:'250px', border:'1px solid black', padding:'1rem'}}>
            <form onSubmit={submitHandler}>
                <h2 style={{paddingBottom:'1rem'}}>Create Todo form</h2>
                <div style={{display:'flex', flexDirection:'column', gap:'8px'}}>
                <label htmlFor="text">Text</label>
                <input style={{padding:'10px'}} name="text" value={text} onChange={(e)=> setText(e.target.value)} placeholder="Text"/>
                </div>
                <div style={{paddingTop:'1rem'}}>
                <button style={{padding:'10px'}}>{loading ? "creating": "create"}</button>
                </div>
            </form>
        </div>
    )
  }

  function Todo({id, text,completed}: Todo){
    const {deleteTodo, deletingIds} = useTodoContext();
    const isDeleting = deletingIds.includes(id);
    return(
        <li className="list_item">
            <span>ID: {id}</span>
            <span>{text}</span>
            <span>{completed ? "true": "false"}</span>
            <button onClick={()=> deleteTodo(id)}>{isDeleting ? 'Deleting...' : 'Delete'} </button>
        </li>
    )
  }


type TodoContextProps = {
    todos: Todo[];
    addTodo:(todo:Todo)=> void;
    deleteTodo:(id: Todo['id'])=> void;
    loading: boolean;
    deletingIds: string[]; 
}

  const TodoContext = createContext<TodoContextProps | null>(null);

type TodoProps = {
    children: ReactNode;
}
export  function TodoP({children}: TodoProps){
    const [todos, setTodos] = useState<Todo[] | []>([]);
    const [loading, setLoading] = useState(false);
    const [deletingIds, setDeletingIds] = useState<string[]>([]);

    function addTodo(todo: Todo){
        setLoading(true);
        setTimeout(()=>{
            setTodos(prev=> [...prev, todo]);
            setLoading(false);
        },3000);    
    }
    
  const deleteTodo = (id: string) => {
    setDeletingIds((prev) => [...prev, id]);
    setTimeout(() => {
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
      setDeletingIds((prev) => prev.filter((deletingId) => deletingId !== id)); // Remove the ID from the deleting list
    }, 3000);
  };

    return(
        <TodoContext.Provider value={{addTodo, deleteTodo, todos, loading, deletingIds }}>
            {children}
        </TodoContext.Provider>
    )
  }

function useTodoContext(){
    const context = useContext(TodoContext);
    if(!context){
        throw new Error("useTodoContext must be used within a TodoProvider")
    }
    return context;
  }