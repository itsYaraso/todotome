"use client"
import { useState, useContext } from "react";
import { TodoContext } from "../providers/TodoItemContext";

export default function ToDoList() {

    const { todoItems, deleteTodo } = useContext(TodoContext);

    return(
        <div className="">
            <h1>To Do List</h1>
            <ol className="border p-4">
                {todoItems.map((task: string) => (
                    <>
                    <div className="flex mt-2 gap-2">
                    <button className="border mr-2 pr-2 text-center"
                    onClick={() => deleteTodo(todoItems.indexOf(task))}>
                    x    
                    </button>
                    <li>{task}</li>
                    </div>
                    </>
                    ))}
            </ol>
            <button onClick={() => {
                        console.log(todoItems)
                    }}>check array</button>
        </div>
    )
}