import classNames from 'classnames';

const style = {
  form: classNames('relative', 'mb-10', 'flex justify-between gap-x-2'),
  input: classNames(
    'py-3 w-full pl-[67px] pr-52',
    'rounded-3xl border-none',
    'bg-white/30',
    'text-lg leading-snug placeholder-color-text-secondary',
    'shadow-md',
    'transition duration-900 ease-in-out',
    'focus:bg-slate-50 focus:placeholder-color-text-primary focus:outline-none'
  ),
};

export default style;
