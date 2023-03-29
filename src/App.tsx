import { useEffect, useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { motion, AnimatePresence } from 'framer-motion';
import TodoList from './components/Todo';
import { Todo } from './Types/Todo';
import fetchTodos from './utils/Utils';

const style = {
  bg: `min-h-screen w-screen p-4 bg-gradient-to-r from-blue-300 to-blue-400`,
  container: `bg-slate-100 rounded-lg p-6 shadow-xl max-w-[1024px] m-auto`,
  heading: `text-3xl font-bold text-center text-gray-700 mb-2`,
  form: `flex justify-between gap-x-2`,
  input: `w-full border pl-6`,
  button: `border rounded-sm p-2 bg-slate-200 hover:bg-slate-300`,
  counter: `text-center`,
};

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetchTodos(setTodos);
  }, []);

  // Create
  // Update
  // Delete

  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h3 className={style.heading}>Todo App</h3>
        <form className={style.form}>
          <input type="text" className={style.input} placeholder="Add Todo" />
          <button className={style.button}>
            <AiOutlinePlus size={30} />
          </button>
        </form>
        <ul>
          <AnimatePresence>
            {todos.map((todo) => {
              return (
                <motion.li
                  key={todo.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                >
                  <TodoList todo={todo} />
                </motion.li>
              );
            })}
          </AnimatePresence>
        </ul>
        {todos.length > 0 && (
          <p className={style.counter}>You have {todos.length} todos left</p>
        )}
      </div>
    </div>
  );
}
