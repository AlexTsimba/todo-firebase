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
    query(collection(db, 'todos'), orderBy('order', 'desc'))
  );

  const todosData = querySnapshot.docs.map((todo, index) => ({
    id: todo.id,
    order: index,
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
    order: todo.order
  });
};

export const deleteTodo = async (todo: Todo) => {
  const todosRef = collection(db, 'todos');
  const todosSnapshot = await getDocs(todosRef);

  const filteredTodos: Todo[] = todosSnapshot.docs
    .filter(item => item.id !== todo.id)
    .map((todoToDelete, index) => ({
      id: todoToDelete.id,
      name: todoToDelete.data().name,
      completed: todoToDelete.data().completed,
      order: index,
    }));

  await Promise.all(
    filteredTodos.map(filteredTodo => updateDoc(doc(todosRef, filteredTodo.id), filteredTodo as { [x: string]: any; }))
  );
  await deleteDoc(doc(db, 'todos', todo.id));
};


