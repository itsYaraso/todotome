import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import ToDoList from "./components/TodoList";
import { TodoContextProvider } from "./providers/TodoItemContext";

const todo: string[] = [];
export default function App() {
  return (
    <div className="flex flex-col p-2">
      <TodoContextProvider>
        <Header />
        <TodoForm todo={todo} />
        <ToDoList />
      </TodoContextProvider>
    </div>
  );
}
