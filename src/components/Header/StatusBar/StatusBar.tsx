import { AnimatePresence, motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { selectPendingTodos } from '../../../Store/todosSelectors';

const StatusBar: React.FC = () => {
  const pendingTodos = useSelector(selectPendingTodos).length;

  return (
    <AnimatePresence>
      {pendingTodos > 0 && (
        <motion.p
          className="text-3xl"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.3 }}
          exit={{ opacity: 0, x: -20 }}
        >
          {pendingTodos} pending {pendingTodos > 1 ? 'todos' : 'todo'}
        </motion.p>
      )}
    </AnimatePresence>
  );
};

export default StatusBar;
