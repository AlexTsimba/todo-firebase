import { useDispatch, useSelector } from 'react-redux';
import { AnimatePresence, motion } from 'framer-motion';

import {
  ArchiveBoxXMarkIcon,
  CheckCircleIcon,
  PencilSquareIcon,
} from '@heroicons/react/24/outline';
import motionConfig from '../../motionConfig';
import { selectedId } from '../../../Store/todosSelectors';
import {
  deleteTodo,
  setEditingTodoId,
  toggleComplete,
} from '../../../Store/todosSlice';

interface DropdownPopupProps {
  isOpen: boolean;
  setTodoDetailsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onMenuClose: () => void;
}

const DropdownPopup: React.FC<DropdownPopupProps> = ({
  setTodoDetailsOpen,
  onMenuClose,
  isOpen,
}) => {
  const dispatch = useDispatch();

  const selectedTodoId = useSelector(selectedId);

  const handleEditTodo = () => {
    dispatch(setEditingTodoId(selectedTodoId));
    setTodoDetailsOpen(true);
    onMenuClose();
  };

  const handleTodoComplete = (idToComplete: string) => {
    dispatch(toggleComplete({ id: idToComplete }));
    onMenuClose();
  };

  const handleTodoDelete = (idToComplete: string) => {
    dispatch(deleteTodo({ id: idToComplete }));
    onMenuClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div {...motionConfig.popup}>
          <ul className="menu w-40 gap-2 rounded-lg border border-zinc-400 bg-color-calendar-primary p-2 shadow-lg">
            <li>
              <button onClick={handleEditTodo}>
                <PencilSquareIcon className="h-6" />
                Details
              </button>
            </li>
            <li>
              <button onClick={() => handleTodoComplete(selectedTodoId || '')}>
                <CheckCircleIcon className="h-6" />
                Complete
              </button>
            </li>

            <li>
              <button onClick={() => handleTodoDelete(selectedTodoId || '')}>
                <ArchiveBoxXMarkIcon className="h-6" />
                Delete
              </button>
            </li>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DropdownPopup;
