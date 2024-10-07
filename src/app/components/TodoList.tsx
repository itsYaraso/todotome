"use client";
import { useState, useContext, useRef, ChangeEvent } from "react";
import { CircleX, Pencil, CircleCheck } from "lucide-react";
import { TodoContext } from "../providers/TodoItemContext";
import { error } from "console";

export default function ToDoList() {
  const editRef = useRef<HTMLInputElement>(null);
  const { todoItems, deleteItem, setTodoItems, saveList } = useContext(TodoContext);
  const [isEditing, setIsEditing] = useState(false);
  const [taskId, setTaskId] = useState(0);

  
  const handleEdit = () => {
    isEditing ? setIsEditing(!isEditing) : setIsEditing(!isEditing);
  };
  
  console.log(todoItems)
  return (
    <div className="">
      <ol>
        {todoItems?.map((task: string, index: number) => (
          <>
            <div className="flex justify-center">
              <div className="bg-blue-500 text-white font-bold py-2 px-4 rounded flex mt-2 gap-2 animate-slidein">
                <button
                  className=""
                  onClick={() => {{deleteItem(todoItems.indexOf(task))
                    if(isEditing == true){
                      handleEdit()
                    }
                  }
                  }}>
                  <CircleX />
                </button>
                <>
                  { isEditing && taskId == index ? (
                      <>
                        <input 
                        className="text-black rounded animate-growappear"
                        type="text" 
                        placeholder="set your changes"
                        ref={editRef}
                        value={task}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                          const newValue = e.target.value;
                          const newTodos = [...todoItems];
                          newTodos[index] = newValue;
                          setTodoItems(newTodos)
                        }}                     
                        />
                        {/* confirm edit */}
                        <button onClick={() => {
                          if (editRef.current) {
                            saveList(todoItems)
                            handleEdit();
                            console.log(task + "edited")
                          }
                        }}>
                          <CircleCheck />
                        </button>
                      </>
                  ) : (
                    <li className="flex gap-2">
                      {task}
                      {/* edit button */}
                      <button
                        onClick={() => {
                          handleEdit();
                          setTaskId(index);
                        }}
                      >
                        <Pencil style={{ width: 18 }} />
                      </button>
                    </li>
                  )}
                </>
              </div>
            </div>
          </>
        ))}
      </ol>
    </div>
  );
}
