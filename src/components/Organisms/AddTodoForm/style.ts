import classNames from 'classnames';

const style = {
  form: classNames('relative', 'mb-20', 'flex justify-between gap-x-2'),
  input: classNames(
    'py-2 w-full px-20',
    'rounded-3xl border-none',
    'bg-color-input-background',
    'text-2xl leading-normal placeholder-color-text-secondary',
    'shadow-md',
    'transition duration-500 ease-in-out',
    'focus:bg-slate-50 focus:placeholder-color-text-primary focus:outline-none'
  ),
};

export default style;
