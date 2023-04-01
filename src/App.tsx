import { useEffect, useState } from 'react';
import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/TodoList/TodoList';
import { Todo } from './Types/Todo';
import { fetchTodos } from './utils/Api';
import Header from './components/Header/Header';

const style = {
  bg: `min-h-screen w-screen overflow-hidden p-4 pt-20 bg-gradient-to-b from-slate-400 to-gray-500`,
  container: `max-w-[800px] m-auto`,
  counter: `text-center`,
};

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isAdding, setIsAdding] = useState<boolean>(false);
  const pendingTodos = todos.filter((todo) => !todo.completed).length;

  useEffect(() => {
    fetchTodos(setTodos);

    setIsAdding(false);
  }, [isAdding]);

  return (
    <div className={style.bg}>
      <div className={style.container}>
        <Header pendingTodos={pendingTodos} />
        <AddTodo todosLength={todos.length} setIsAdding={setIsAdding} />
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}
