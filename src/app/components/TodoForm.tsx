"use client";
import React from "react";
import { useContext, useRef, useState } from "react";
import { TodoContext } from "../providers/TodoItemContext";
export default function TodoForm({}: { todo: string[] }) {
  const inputRef = useRef<HTMLInputElement>(null);

  const { todoItems, setTodoItems } = useContext(TodoContext);

  return (
    <div className="">
      <form className="flex gap-2" name="todo-form" title="todo-form">
        <label htmlFor="todo-input"></label>
        <input
          className="text-black"
          ref={inputRef}
          type="text"
          id="todo-input"
          placeholder="Add a task"
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={(event) => {
            event.preventDefault();
            if (inputRef.current) {
              setTodoItems([...todoItems, inputRef.current.value]);
            }
            console.log(todoItems);
          }}
          type="submit"
        >
          Add
        </button>
      </form>
    </div>
  );
}
