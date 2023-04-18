import classNames from 'classnames';

const style = {
  container: classNames(
    'group',
    'relative',
    'rounded-lg',
    'bg-slate-50',
    'first:rounded-t-3xl last:rounded-b-3xl',
  ),
  content: classNames(
    'relative',
    'mb-2 p-2',
    'flex justify-between',
    'font-sans text-md',
    'transition duration-300 ease-in-out',
  ),
  buttonGroup: classNames('flex', 'gap-2', 'lg:gap-4'),
};

export default style;
