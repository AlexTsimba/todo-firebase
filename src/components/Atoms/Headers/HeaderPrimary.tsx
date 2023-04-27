import { motion } from 'framer-motion';
import { getGreetingTime } from '../../../utils/DateTimeFormat';
import style from './style';

const HeaderPrimary = () => {
  const greetingTime = getGreetingTime();

  return (
    <motion.h1
      className={style.header}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      Good {greetingTime}, Username
    </motion.h1>
  );
};

export default HeaderPrimary;
