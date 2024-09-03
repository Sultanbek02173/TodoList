import { MdDelete } from "react-icons/md";
import { BiSolidEdit } from "react-icons/bi";
import { EditTodo } from "../EditTodo/EditTodo";

export const TodoList = ({todo, deleteTodo, complateTodo, editTodo, changeText}) => {
    return (
        <div className="todoCont">
            <h1>Todo List</h1>
            <input placeholder="search todos" type="text" />
            {
                todo && 
                todo.map((item, index) => (
                  <div key={index} className="todoItem">
                    {
                        item.isEdit === true ? (
                            <EditTodo text={item.text} id={item.id} changeText={changeText} />
                        )
                        :
                        (
                            <>
                            <p className={item.complete ? 'complate' : ''} onClick={() => complateTodo(item.id)}>{item.text}</p>
                            <div>
                                <button className="deleteBtn" onClick={() => {editTodo(item.id)}}>
                                    <BiSolidEdit color="white" /> 
                                </button>
                                <button className="deleteBtn" onClick={() => deleteTodo(item.id)}>
                                    <MdDelete color="white" />
                                </button>
                            </div>
                            </>
                        )
                         
                    }
                    
                   
                </div>  
                ))
            }
        </div>
    );
}

