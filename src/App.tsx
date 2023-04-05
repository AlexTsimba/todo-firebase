import AddTodo from './components/AddTodo/AddTodo';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';

const style = {
  bg: ` bg-local min-h-screen w-screen overflow-hidden p-4 pt-20 bg-fixed bg-cover bg-[#9da1af]`,

  container: `max-w-[1024px] m-auto`,
  counter: `text-center`,
};

export default function App() {
  return (
    <div className={style.bg}>
      <div className={style.container}>
        <Header />
        <AddTodo />
        <TodoList />
      </div>
    </div>
  );
}
