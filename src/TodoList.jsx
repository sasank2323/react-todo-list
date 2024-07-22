import {useState} from "react"
import { v4 as uuidv4 } from 'uuid';
export default function Todolist()
{
    let [todos, setTodos] = useState([{task:"sample task",id:uuidv4()}]);  
    let [newTodo, setNewTodo] = useState(" ");
    let addnewtask = ()=>
        {
          setTodos((prevstodos)=>{
            return [...prevstodos,{task:newTodo,id:uuidv4()}]
          });
          setNewTodo("")
        }
        let updatetodo =(event)=>
        {
         setNewTodo(event.target.value);
        }
        let deletetodo=(id)=>
        {
          setTodos((prevstodo)=>prevstodo.filter((todo)=>prevstodo.id !=id))

        }

        let uppercaseone =(id)=>{
            setTodos((todos)=>(
                todos.map((todo)=>{
                    if(todo.id==id)
                        {
                            return {
                                ...todo,
                                task:todo.task.toUpperCase()
                            };
                        }
                    else{
                        return todo;
                    }

                })
               ));

        };
        let uppercaseall= ()=>
            {
               setTodos((todos)=>(
                todos.map((todo)=>{
                return {
                    ...todo,
                    task:todo.task.toUpperCase()
                };

                })
               ))
            };
    return(
        <div>
            <input placeholder="add" value={newTodo} onChange={updatetodo}></input>
            <button onClick={addnewtask}>add task</button>
            <br/>
            <hr></hr>
            <p>to do list </p>
            <ul>
                {
                    todos.map((todo)=>(
                        <li key={todo.id}>
                            <span>{todo.task}</span>
                            <button onClick={()=>deletetodo(todo.id)}>delete</button>
                            <button onClick={()=>uppercaseone(todo.id)}>upper case </button>
                            </li>
                    ))
                }
            </ul>
            <button onClick={uppercaseall}>upper case</button>
        </div>
    );
}