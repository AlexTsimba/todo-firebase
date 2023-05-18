import { Todo } from '../Types/Todo';

 const compareTodos = (one: Todo, two: Todo) => {
  const isEqual = Object.entries(one).toString() === Object.entries(two).toString();
  return isEqual;
};

export default compareTodos;