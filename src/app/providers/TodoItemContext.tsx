"use client";
import React, { createContext, useContext, useState } from 'react';

interface TodoTypes {
    todoItems: string[],
    setTodoItems: React.Dispatch<React.SetStateAction<any>>,
    deleteTodo: (index: number) => void
}

export const TodoContext = createContext({} as TodoTypes);

export function TodoContextProvider(props: React.PropsWithChildren) {
    const [todoItems, setTodoItems] = useState([])

    const deleteTodo = (index: number) => {
        setTodoItems(todoItems.filter((_, i) => i !== index))
    }


    const TodoValue = {
        todoItems,
        setTodoItems,
        deleteTodo
    };



    return (
        <TodoContext.Provider value={TodoValue}>
            {props.children}
        </TodoContext.Provider>
    );
}