"use client";
import React, { createContext, useContext, useState } from 'react';

interface TodoTypes {
    todoItems: string[],
    setTodoItems: React.Dispatch<React.SetStateAction<any>>,
}

export const TodoContext = createContext({} as TodoTypes);

export function TodoContextProvider(props: React.PropsWithChildren) {
    const [todoItems, setTodoItems] = useState([])

    const TodoValue = {
        todoItems,
        setTodoItems,
    };



    return (
        <TodoContext.Provider value={TodoValue}>
            {props.children}
        </TodoContext.Provider>
    );
}