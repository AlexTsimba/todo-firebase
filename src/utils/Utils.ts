export const getGreeting = (date = new Date()) => {
  const hour = date.getHours();
  let greeting;

  if (hour >= 5 && hour < 12) {
    greeting = 'Good morning';
  } else if (hour >= 12 && hour < 18) {
    greeting = 'Good afternoon';
  } else {
    greeting = 'Good evening';
  }

  return greeting;
};

export const getTodayDate = (date = new Date()) => {
  const formatter = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
  });

  return formatter.format(date);
};
export const getDateShort = (date = new Date()) => {
  const formatter = new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
  });

  return formatter.format(date);
};
export const getDateShortest = (date = new Date()) => {
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


//   export const formatter = new Intl.RelativeTimeFormat("en", {numeric: "auto"});
//   formatter.format(1, 'days');
