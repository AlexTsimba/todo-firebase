import { useEffect, useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { AnimatePresence } from 'framer-motion';
// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import TodoItem from './components/TodoItem';
import { Todo } from './Types/Todo';
import { fetchTodos, deleteTodo, addTodo } from './utils/Utils';

const style = {
  bg: `min-h-screen w-screen overflow-hidden p-4 bg-gradient-to-r from-blue-300 to-blue-400`,
  container: `bg-slate-100 rounded-lg p-6 shadow-xl max-w-[1024px] m-auto`,
  heading: `text-3xl font-bold text-center text-gray-700 mb-2`,
  form: `flex justify-between gap-x-2`,
  input: `w-full border pl-6`,
  button: `border rounded-sm p-2 bg-slate-200 hover:bg-slate-300`,
  counter: `text-center`,
};

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState<string>('');
  const [processing, setProcessing] = useState<boolean>(false);

  useEffect(() => {
    fetchTodos(setTodos);
    setProcessing(false);
  }, [processing]);

  const handlInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (input.length > 0) {
      const newTodo = {
        name: input,
        completed: false,
        order: todos.length,
      };

      addTodo(newTodo);
      setProcessing(true);
      setInput('');
    }
  };

  const HandleDeleteTodo = async (todo: Todo) => {
    deleteTodo(todo);
    setTodos((prevTodos) => prevTodos.filter((t) => t.id !== todo.id));
  };

  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h3 className={style.heading}>Todo App</h3>
        <form className={style.form} onSubmit={handleSubmit}>
          <input
            type="text"
            className={style.input}
            placeholder="Add Todo"
            value={input}
            onChange={handlInputChange}
            disabled={processing}
          />
          <button className={style.button}>
            <AiOutlinePlus size={30} />
          </button>
        </form>
        <ul>
          <AnimatePresence>
            {todos.map((todo) => {
              return (
                <TodoItem
                  todo={todo}
                  key={todo.id}
                  onDelete={HandleDeleteTodo}
                />
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
