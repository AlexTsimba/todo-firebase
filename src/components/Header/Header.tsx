// import React from 'react';
// import { getGreeting, getTodayDate } from '../../utils/Utils';

// interface Props {
//     pendingTodos: number
// }

// const greeting = getGreeting();
// const todayDate = getTodayDate();

// const Header: React.FC<Props> = ({ pendingTodos }) => {

//   return (
//     <header className="my-10">
//         <div className="">
//             <h1 className="my-4 text-3xl font-normal text-light">{greeting}, Username</h1>
//             <div className="flex justify-between text-4xl font-light text-gray-600">
//                 <p >It&#39;s {todayDate } </p>
//                 {pendingTodos > 0 && (<p className="text-3xl">{pendingTodos} pending {pendingTodos > 1 ? 'todos' : 'todo'}</p>)}
//             </div>
//         </div>
//     </header>
//   );
// };

// export default Header;

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getGreeting, getTodayDate } from '../../utils/Utils';

interface Props {
  pendingTodos: number;
}

const Header: React.FC<Props> = ({ pendingTodos }) => {
  const greeting = getGreeting();
  const todayDate = getTodayDate();

  return (
    <header className="my-10">
      <div className="">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="my-4 text-3xl font-normal text-light"
        >
          {greeting}, Username
        </motion.h1>
        <div className="flex justify-between text-4xl font-light text-gray-600">
          <p>It&#39;s {todayDate} </p>
          <AnimatePresence>
            {pendingTodos > 0 && (
              <motion.p
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                exit={{ opacity: 0, x: -20 }}
                className="text-3xl"
              >
                {pendingTodos} pending {pendingTodos > 1 ? 'todos' : 'todo'}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
};

export default Header;
