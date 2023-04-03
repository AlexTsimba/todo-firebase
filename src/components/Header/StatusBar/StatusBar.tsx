import { AnimatePresence, motion } from 'framer-motion';

interface Props {
  pendingTodos: number;
}

const StatusBar: React.FC<Props> = ({ pendingTodos }) => {
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
