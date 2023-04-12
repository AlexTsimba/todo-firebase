export const getGreetingTime = (date = new Date()) => {
  const hour = date.getHours();
  let greeting;

  if (hour >= 5 && hour < 12) {
    greeting = 'morning';
  } else if (hour >= 12 && hour < 18) {
    greeting = 'afternoon';
  } else {
    greeting = 'evening';
  }

  return greeting;
};

export const getDateFull = (date = new Date()) => {
  const formatter = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
  });

  return formatter.format(date);
};
export const getDateMonthDay = (date = new Date()) => {
  const formatter = new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
  });

  return formatter.format(date);
};
export const getDateMonth = (date = new Date()) => {
  const formatter = new Intl.DateTimeFormat('en-US', {
    month: 'long',
  });

  return formatter.format(date);
};

export const getRelativeDate = (dateFromState: string) => {
  const date = new Date(dateFromState);
  const today = new Date();
  const diffTime = date.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (Number.isNaN(diffDays) || !Number.isFinite(diffDays)) {
    return 'Invalid Date';
  }

  const formatter = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });

  return formatter.format(diffDays, 'day');
};
