import {
  getDocs,
  collection,
  updateDoc,
  deleteDoc,
  addDoc,
  doc,
  query,
  orderBy,
} from 'firebase/firestore';
import db from '../firebase';
import { Todo } from '../Types/Todo';

export const fetchTodos = async (setTodos: (todos: Todo[]) => void) => {
  const querySnapshot = await getDocs(
    query(collection(db, 'todos'), orderBy('createdAt', 'desc'))
  );

  const todosData = querySnapshot.docs.map((todo) => ({
    id: todo.id,
    ...todo.data(),
  })) as unknown as Todo[];

  setTodos(todosData);
};

export const toggleComplete = async (todo: Todo) => {
  await updateDoc(doc(db, 'todos', todo.id), {
    completed: !todo.completed,
  });
};

export const addTodo = async (todo: Omit<Todo, 'id'>) => {
  await addDoc(collection(db, 'todos'), {
    name: todo.name,
    completed: todo.completed,
    createdAt: todo.createdAt,
  });
};

export const deleteTodo = async (todo: Todo) => {
  await deleteDoc(doc(db, 'todos', todo.id));
};
