import { useEffect, useState } from 'react';
import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/TodoList/TodoList';
import { Todo } from './Types/Todo';
import { fetchTodos } from './utils/Utils';

const style = {
  bg: `min-h-screen w-screen overflow-hidden p-4 bg-gradient-to-r from-blue-300 to-blue-400`,
  container: `bg-slate-100 rounded-lg p-6 shadow-xl max-w-[1024px] m-auto`,
  heading: `text-3xl font-bold text-center text-gray-700 mb-2`,
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
        <h3 className={style.heading}>Todo App</h3>

        <AddTodo todosLength={todos.length} setIsAdding={setIsAdding} />

        <TodoList todos={todos} setTodos={setTodos} />

        {todos.length > 0 && (
          <p className={style.counter}>You have {todos.length} todos left</p>
        )}
      </div>
    </div>
  );
}
