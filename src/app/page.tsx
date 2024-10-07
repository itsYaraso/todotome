import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import ToDoList from "./components/TodoList";
import { TodoContextProvider } from "./providers/TodoItemContext";

const todo: string[] = [];
export default function app() {
  return (
    <div className="flex flex-col p-4">
      <TodoContextProvider>
        <Header />
        <br></br>
      <TodoForm todo={todo}/>
      <br></br>
      <ToDoList  />
      </TodoContextProvider>
    </div>
  );
}
