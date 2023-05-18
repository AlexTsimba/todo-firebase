/* eslint-disable react/jsx-no-useless-fragment */

import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Todo } from '../../../Types/Todo';
import useOnClickOutside from '../../../utils/Hooks/useOnClickOutside';
import ButtonClose from '../../Atoms/Buttons/ButtonClose';
import ButtonDeleteAlternative from '../../Atoms/Buttons/ButtonDeleteAlternative';
import compareTodos from '../../../utils/CompareTodos';
import { updateTodo } from '../../../Store/todosSlice';
import TodoName from './TodoName';
import Checkbox from './Checkbox';
import Description from './Description';
import DueDate from './DueDate';

interface TodoDetailsProps {
  todo: Todo;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const TodoDetails: React.FC<TodoDetailsProps> = ({
  todo,
  isOpen,
  setIsOpen,
}) => {
  const [details, setDetails] = useState<Todo>({ ...todo });
  const { id, name, description, dueDate, completed } = details;

  const rootElement = document.getElementById('root');
  const wrapperRef = useRef<HTMLDivElement>(null);
  const parentId = 'todoDetails';
  const dispatch = useDispatch();

  const updateDetails = useCallback(
    (newDetails: Partial<Todo>) => {
      setDetails((prevDetails) => {
        return { ...prevDetails, ...newDetails };
      });
    },
    [setDetails]
  );

  const closeTodoDetails = () => {
    const isDetailsChanged = compareTodos(details, todo);

    if (!isDetailsChanged) {
      setIsOpen(false);
    }

    dispatch(updateTodo(details));
    setIsOpen(false);
  };

  useOnClickOutside(wrapperRef, closeTodoDetails);

  useEffect(() => {
    setDetails({ ...todo });
  }, [todo]);

  return (
    <>
      {rootElement &&
        createPortal(
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className=" fixed top-0 bottom-0 right-0 w-80 gap-2 bg-white/30 p-4 text-base-content backdrop-blur-lg lg:top-4 lg:bottom-4 lg:right-4 lg:block lg:rounded-lg"
                ref={wrapperRef}
                id={parentId}
                key={id}
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 300, opacity: 0 }}
                transition={{ ease: 'easeInOut', duration: 0.3 }}
              >
                <div className="grid grid-cols-1 grid-rows-[auto,min-content] gap-4 transition duration-300 ease-in-out">
                  <div className="flex items-center justify-between">
                    <Checkbox
                      completed={completed}
                      updateDetails={updateDetails}
                    />
                    <ButtonClose onClose={closeTodoDetails} />
                  </div>

                  <TodoName name={name} updateDetails={updateDetails} />

                  <DueDate dueDate={dueDate} updateDetails={updateDetails} />

                  <Description
                    description={description}
                    updateDetails={updateDetails}
                  />

                  <div className="absolute left-1/2 bottom-4 flex -translate-x-1/2 transform justify-around gap-2">
                    <ButtonDeleteAlternative id={id} />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>,
          rootElement
        )}
    </>
  );
};

export default TodoDetails;
