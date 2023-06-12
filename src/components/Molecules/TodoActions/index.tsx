// import React, { Fragment, useRef, useState } from 'react';

// import { useDispatch } from 'react-redux';
// import useOnClickOutside from '../../../utils/Hooks/useOnClickOutside';
// import ButtonMore from '../../Atoms/Buttons/ButtonMore';
// import DropdownPopup from '../../Atoms/DropdownPopup';
// import { setSelectedTodoId } from '../../../Store/todosSlice';
// import TodoDetails from '../../Organisms/TodoDetails';

// interface TodoActionsProps {
//   id: string;
//   isFirst: boolean;
//   isLast: boolean;
// }

// const TodoActions: React.FC<TodoActionsProps> = ({ id, isFirst, isLast }) => {
//   const [isActionsMenuOpen, setActionsMenuOpen] = useState(false);
//   const [isTodoDetailsOpen, setTodoDetailsOpen] = useState(false);
//   const dispatch = useDispatch();

//   const wrapperRef = useRef<HTMLDivElement>(null);
//   useOnClickOutside(wrapperRef, () => setActionsMenuOpen(false));

//   dispatch(setSelectedTodoId(id));

//   const handleToggleActionsMenu = () => {
//     setActionsMenuOpen(!isActionsMenuOpen);
//   };

//   return (
//     <>
//       <ButtonMore
//         onClick={handleToggleActionsMenu}
//         isFirst={isFirst}
//         isLast={isLast}
//       />
//       {isActionsMenuOpen && (
//         <div ref={wrapperRef} className="relative">
//           <div className="absolute right-0 z-10">
//             <DropdownPopup
//               setTodoDetailsOpen={setTodoDetailsOpen}
//               onMenuClose={handleToggleActionsMenu}
//             />
//           </div>
//           <TodoDetails
//             todoId={id}
//             isOpen={isTodoDetailsOpen}
//             setIsOpen={setTodoDetailsOpen}
//           />
//         </div>
//       )}
//     </>
//   );
// };

// export default TodoActions;
import React, { useRef, useState } from 'react';

import { useDispatch } from 'react-redux';
import useOnClickOutside from '../../../utils/Hooks/useOnClickOutside';
import ButtonMore from '../../Atoms/Buttons/ButtonMore';
import DropdownPopup from '../../Atoms/DropdownPopup';
import { setSelectedTodoId } from '../../../Store/todosSlice';
import TodoDetails from '../../Organisms/TodoDetails';

interface TodoActionsProps {
  id: string;
  isFirst: boolean;
  isLast: boolean;
}

const TodoActions: React.FC<TodoActionsProps> = ({ id, isFirst, isLast }) => {
  const [isActionsMenuOpen, setActionsMenuOpen] = useState(false);
  const [isTodoDetailsOpen, setTodoDetailsOpen] = useState(false);
  const dispatch = useDispatch();

  const wrapperRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(wrapperRef, () => setActionsMenuOpen(false));

  dispatch(setSelectedTodoId(id));

  const handleToggleActionsMenu = () => {
    setActionsMenuOpen(!isActionsMenuOpen);
  };

  return (
    <div ref={wrapperRef} className="relative">
      <ButtonMore
        onClick={handleToggleActionsMenu}
        isFirst={isFirst}
        isLast={isLast}
      />
      <div className="absolute right-0 z-10">
        <DropdownPopup
          isOpen={isActionsMenuOpen}
          setTodoDetailsOpen={setTodoDetailsOpen}
          onMenuClose={handleToggleActionsMenu}
        />
      </div>
      <TodoDetails
        todoId={id}
        isOpen={isTodoDetailsOpen}
        setIsOpen={setTodoDetailsOpen}
      />
    </div>
  );
};

export default TodoActions;
