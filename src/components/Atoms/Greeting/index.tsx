import { motion } from 'framer-motion';
import { getGreetingTime, getDateFull } from '../../../utils/DateTimeFormat';
import style from './style';

const Greeting = () => {
  const greetingTime = getGreetingTime();
  const todayDate = getDateFull();

  return (
    <div>
      <motion.h1
        className={style.greeting}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Good {greetingTime}, Username
      </motion.h1>
      <p className={style.todaydate}>It&#39;s {todayDate}</p>
    </div>
  );
};

export default Greeting;
