import { motion } from 'framer-motion';
import style from './style';

interface HeaderSecondaryProps {
  title: string;
}

const HeaderSecondary: React.FC<HeaderSecondaryProps> = ({ title }) => {
  return (
    <motion.h1
      className={style.header}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {title}
    </motion.h1>
  );
};

export default HeaderSecondary;
