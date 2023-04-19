import { motion } from 'framer-motion';
import { getGreetingTime } from '../../../utils/DateTimeFormat';
import style from './style';

const Greeting = () => {
  const greetingTime = getGreetingTime();

  return (
    <motion.h1
      className={style.greeting}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      Good {greetingTime}, Username
    </motion.h1>
  );
};

export default Greeting;
