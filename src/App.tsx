// import AddTodoForm from './components/Organisms/AddTodoForm';
// import Header from './components/Organisms/Header';
// import TodoList from './components/Organisms/TodoList';

import { RouterProvider } from 'react-router-dom';
import router from './Router/router';

// const style = {
//   bg: `bg-local min-h-screen w-screen overflow-hidden p-8 pt-10 bg-fixed bg-cover bg-color-background`,
//   container: `max-w-[1024px] m-auto`,
// };

const App = () => <RouterProvider router={router} />;

export default App;
