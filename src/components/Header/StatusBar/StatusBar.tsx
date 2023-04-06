import { AnimatePresence, motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { selectPendingTodos } from '../../../redux/todosSelectors';

const StatusBar: React.FC = () => {
  const pendingTodos = useSelector(selectPendingTodos).length;

  return (
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
  );
};

export default StatusBar;
