"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

interface TodoTypes {
  todoItems: string[];
  setTodoItems: React.Dispatch<React.SetStateAction<string[]>>;
  deleteItem: (index: number) => void;
  saveList: Function;
  isComplete: boolean;
  setIsCompleted: React.Dispatch<React.SetStateAction<boolean>>;
  addedTask: boolean;
  setAddedTask: React.Dispatch<React.SetStateAction<boolean>>;

}

export const TodoContext = createContext({} as TodoTypes);

export function TodoContextProvider(props: React.PropsWithChildren) {
  const [todoItems, setTodoItems] = useState([]);
  const [isComplete, setIsComplete] = useState(false);
  const [addedTask, setAddedTask] = useState(false);

  const saveList = (newTodos?: string[]) => {
    localStorage.setItem("tasks", JSON.stringify(newTodos ?? todoItems),)
  };

  const deleteItem = (index: number) => {
    const newTodos = todoItems.filter((_, i) => i !== index);
    setTodoItems(newTodos);
    saveList(newTodos);
  };

  useEffect(() => {
    const getList = localStorage.getItem("tasks");

    try {
      const fullList = getList ? JSON.parse(getList) : [];
      setTodoItems(fullList);
    } catch (error) {
      setTodoItems([]);
    }
  }, []);

  const TodoValue = {
    todoItems,
    setTodoItems,
    deleteItem,
    saveList,
    isComplete,
    setIsComplete,
    addedTask,
    setAddedTask
  };

  return (
    <TodoContext.Provider value={TodoValue}>
      {props.children}
    </TodoContext.Provider>
  );
}
