import { useEffect, useState } from 'react';
import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/TodoList/TodoList';
import { Todo } from './Types/Todo';
import { fetchTodos } from './utils/Utils';

const style = {
  bg: `min-h-screen w-screen overflow-hidden p-4 pt-20 bg-gradient-to-b from-slate-400 to-gray-500`,
  container: `rounded-lg p-6 shadow-xl max-w-[1024px] m-auto`,
  counter: `text-center`,
};

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isAdding, setIsAdding] = useState<boolean>(false);

  useEffect(() => {
    fetchTodos(setTodos);

    setIsAdding(false);
  }, [isAdding]);

  return (
    <div className={style.bg}>
      <div className={style.container}>
        <AddTodo todosLength={todos.length} setIsAdding={setIsAdding} />

        <TodoList todos={todos} setTodos={setTodos} />

        {todos.length > 0 && (
          <p className={style.counter}>You have {todos.length} todos left</p>
        )}
      </div>
    </div>
  );
}
