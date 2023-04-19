import React from 'react';
import { getDateFull } from '../../../utils/DateTimeFormat';

const todayDate = getDateFull();

const style = {
  todaydate:
    'text-2xl font-light text-color-text-secondary leading-normal text-center',
};

const TodayDate = () => {
  return <span className={style.todaydate}>It&#39;s {todayDate}</span>;
};

export default TodayDate;
