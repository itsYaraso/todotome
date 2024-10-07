"use client";
import { useState, useContext } from "react";
import { CircleX, Pencil, CircleCheck } from "lucide-react";
import { TodoContext } from "../providers/TodoItemContext";

export default function ToDoList() {
  const { todoItems, deleteItem } = useContext(TodoContext);
  const [isEditing, setIsEditing] = useState(false);
  const [getTaskId, setGetTaskId] = useState(0);

  const handleEdit = () => {
    isEditing ? setIsEditing(!isEditing) : setIsEditing(!isEditing);
  };

  return (
    <div className="">
      <h1 className="flex justify-center text-5xl">To Do List</h1>
      <ol>
        {todoItems.map((task: string, index: number) => (
          <>
            <div className="flex justify-center">
              <div className="bg-blue-500 text-white font-bold py-2 px-4 rounded flex mt-2 gap-2 animate-slidein">
                <button
                  className=""
                  onClick={() => deleteItem(todoItems.indexOf(task))}
                >
                  <CircleX />
                </button>
                <>
                  {isEditing ? (
                    getTaskId == todoItems.indexOf(task) && (
                      <>
                        <input 
                        className="text-black rounded animate-growappear"
                        type="text" placeholder="set your changes"/>
                        <button onClick={handleEdit}>
                          <CircleCheck />
                        </button>
                      </>
                    )
                  ) : (
                    <li className="flex gap-2 anim">
                      {task} |{" "}
                      <button
                        onClick={() => {
                          handleEdit();
                          setGetTaskId(todoItems.indexOf(task));
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
      <button
        className="border"
        onClick={() => {
          console.log(todoItems.length);
        }}
      >
        check array
      </button>
    </div>
  );
}
