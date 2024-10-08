"use client";
import React from "react";
import { useContext, useRef, useState, } from "react";
import { TodoContext } from "../providers/TodoItemContext";


export default function TodoForm({}: { todo: string[] }) {
  const inputRef = useRef<HTMLInputElement>(null);

  const { todoItems, setTodoItems, saveList, addedTask, setAddedTask} = useContext(TodoContext);

  const taskHandler = ()  =>{
    setTimeout(() => {
      setAddedTask(true)
    }, 1000);
    setAddedTask(false)

  }
  
  return (
    <div className="flex justify-center">
      <form className="flex gap-2" name="todo-form" title="todo-form">
        <label htmlFor="todo-input"></label>
        <input
          className="border rounded bg-neutral-500 placeholder:text-neutral-900 text-neutral-900  font-bold"
          ref={inputRef}
          type="text"
          id="todo-input"
          placeholder="  Add a task"
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={(event) => {
            event.preventDefault();
            taskHandler()
            if (inputRef.current) {
              const newTodos = [...todoItems, inputRef.current.value]
              setTodoItems(newTodos);
              saveList(newTodos)
              inputRef.current.value = ""
              console.log(addedTask)
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
