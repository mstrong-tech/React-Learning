import Todos from "./components/Todos";
import NewTodoItem from "./components/NewTodoItem";
import TodosContextProvider from "./store/todos-context";

function App() {
  return (
    <TodosContextProvider>
      <NewTodoItem />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
