import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCompletedTodos } from '../../Store/todosSelectors';
import { deleteTodo } from '../../Store/todosSlice';
import HeaderSecondary from '../Atoms/Headers/HeaderSecondary';
import { getDateMonthDay } from '../../utils/DateTimeFormat';

const CompletedList = () => {
  const completedTodos = useSelector(selectCompletedTodos);
  const dispatch = useDispatch();

  const handleDelete = (idToDelete: string) => {
    dispatch(deleteTodo({ id: idToDelete }));
  };

  return (
    <div className="flex flex-col gap-10 lg:gap-[110px]">
      <HeaderSecondary title="Completed" />
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Sceduled</th>
              <th>Completed </th>
              <th>Actions </th>
            </tr>
          </thead>
          <tbody>
            {completedTodos.map((todo, index) => (
              <tr key={todo.id}>
                <td>{index + 1}</td>
                <td className="">{todo.name}</td>
                <td>{getDateMonthDay(todo.dueDate)}</td>
                <td>{getDateMonthDay(todo.completionDate)}</td>
                <td className="just flex gap-4">
                  <button type="button" onClick={() => handleDelete(todo.id)}>
                    delete
                  </button>
                  <button type="button" onClick={() => handleDelete(todo.id)}>
                    restore
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CompletedList;
