"use client";
import React from "react";
import { useContext, useRef, useState, } from "react";
import { Pencil } from 'lucide-react';
import { TodoContext } from "../providers/TodoItemContext";


export default function TodoForm({}: { todo: string[] }) {
  const inputRef = useRef<HTMLInputElement>(null);

  const { todoItems, setTodoItems, saveList} = useContext(TodoContext);
  const[isEditing, setIdEditing] = useState(false)

  
  return (
    <div className="flex justify-center">
      <form className="flex gap-2" name="todo-form" title="todo-form">
        <label htmlFor="todo-input"></label>
        <input
          className="text-black border rounded bg-neutral-500 placeholder:text-black font-bold"
          ref={inputRef}
          type="text"
          id="todo-input"
          placeholder="  Add a task"
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={(event) => {
            event.preventDefault();
            if (inputRef.current) {
              const newTodos = [...todoItems, inputRef.current.value]
              setTodoItems(newTodos);
              saveList(newTodos)
              inputRef.current.value = ""
            }
          }}
          type="submit"
        >
          Add
        </button>
      </form>
    </div>
  );
}
