import { motion } from 'framer-motion';
import { getGreeting, getTodayDate } from '../../utils/Utils';

const Greeting = () => {
  const greeting = getGreeting();
  const todayDate = getTodayDate();

  return (
    <motion.h1
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="text-light text-3xl font-normal"
    >
      {greeting}, Username
      <p className="text-4xl font-light text-gray-600">It&#39;s {todayDate}</p>
    </motion.h1>
  );
};

export default Greeting;
