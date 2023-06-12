import React from 'react';
import Calendar from 'react-calendar';
import { AnimatePresence, motion } from 'framer-motion';

import { getDateMonth } from '../../../utils/DateTimeFormat';
import 'react-calendar/dist/Calendar.css';
import './style.scss';
import motionConfig from '../../motionConfig';

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
        <motion.div key={dueDate} {...motionConfig.popup}>
          <Calendar
            navigationLabel={({ date }) => getDateMonth(date)}
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
