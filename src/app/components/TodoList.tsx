"use client"
import { useState, useContext } from "react";
import { TodoContext } from "../providers/TodoItemContext";

export default function ToDoList() {

    const { todoItems } = useContext(TodoContext);

    return(
        <div className="">
            <h1>To Do List</h1>
            <ol className="border p-4">
                {todoItems.map((task: string) => (<li>{task}</li>))}
            </ol>
        </div>
    )
}