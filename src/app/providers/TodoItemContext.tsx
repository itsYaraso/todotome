"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

interface TodoTypes {
  todoItems: string[];
  setTodoItems: React.Dispatch<React.SetStateAction<string[]>>;
  deleteItem: (index: number) => void;
  saveList: Function;
}

export const TodoContext = createContext({} as TodoTypes);

export function TodoContextProvider(props: React.PropsWithChildren) {
  const [todoItems, setTodoItems] = useState([]);

  const saveList = (newTodos?: string[]) => {
    localStorage.setItem("tasks", JSON.stringify(newTodos ?? todoItems));
  };

  const deleteItem = (index: number,) => {
    const newTodos = todoItems.filter((_, i) => i !== index)
    setTodoItems(newTodos);
    saveList(newTodos);
  };

 

  useEffect(() => {
    const getList = localStorage.getItem("tasks");

    try {
        const fullList = getList ? JSON.parse(getList) : []
        setTodoItems(fullList)
    } catch (error) {
        setTodoItems([])   
    }
    }, []);

  const TodoValue = {
    todoItems,
    setTodoItems,
    deleteItem,
    saveList,
  };

  return (
    <TodoContext.Provider value={TodoValue}>
      {props.children}
    </TodoContext.Provider>
  );
}
