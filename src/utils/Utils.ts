import {
  getDocs,
  collection,
  updateDoc,
  deleteDoc,
  addDoc,
  doc,
  query,
  orderBy,
  writeBatch,
} from 'firebase/firestore';
import db from '../../firebase';
import { Todo } from '../Types/Todo';

export const fetchTodos = async (setTodos: (todos: Todo[]) => void) => {
  const querySnapshot = await getDocs(
    query(collection(db, 'todos'), orderBy('order', 'asc'))
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
    order: todo.order,
  });
};

export const deleteTodo = async (todo: Todo) => {
  const todoRef = doc(db, 'todos', todo.id);
  await deleteDoc(todoRef);
  
  const todosRef = collection(db, 'todos');
  const todosSnapshot = await getDocs(todosRef);

  const batch = writeBatch(db);
  todosSnapshot.docs.forEach((dc, index) => {
    batch.update(dc.ref, { order: index });
  });
  await batch.commit();
};


export const updateTodosOrder = async (updatedTodos: Todo[]) => {
  const todosRef = collection(db, 'todos');

  await Promise.all(
    updatedTodos.map((updatedTodo) =>
      updateDoc(doc(todosRef, updatedTodo.id), {
        order: updatedTodo.order,
      })
    )
  );
};
 