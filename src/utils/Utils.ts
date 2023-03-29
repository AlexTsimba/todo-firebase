import { getDocs, collection } from 'firebase/firestore';
import db from '../firebase';
import { Todo } from '../Types/Todo';

const fetchTodos = async (setTodos: (todos: Todo[]) => void) => {
  const querySnapshot = await getDocs(collection(db, 'todos'));

  const todosData = querySnapshot.docs.map((todo) => ({
    id: todo.id,
    ...todo.data(),
  })) as unknown as Todo[];

  setTodos(todosData);
};

export default fetchTodos;
