import React from 'react';
import Calendar from 'react-calendar';
import { AnimatePresence, motion } from 'framer-motion';

import { getDateShortest } from '../../../utils/Utils';
import 'react-calendar/dist/Calendar.css';
import './index.scss';

interface CalendarPopupProps {
  dueDate: string;
  handleChange: (date: any) => void;
  isOpen: boolean;
}

const CalendarPopup: React.FC<CalendarPopupProps> = ({
  dueDate,
  handleChange,
  isOpen,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key={dueDate}
          className="absolute -top-48 right-24 z-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ ease: 'easeInOut', duration: 0.3 }}
        >
          <Calendar
            navigationLabel={({ date }) => getDateShortest(date)}
            formatShortWeekday={() => ''}
            value={dueDate}
            onChange={handleChange}
            minDate={new Date()}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CalendarPopup;
