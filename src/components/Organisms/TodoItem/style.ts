import classNames from 'classnames';

const style = {
  container: classNames(
    'w-full z-10',
    'group',
    'relative',
    'rounded-lg',
    'bg-slate-50',
    'first:rounded-t-3xl last:rounded-b-3xl'
  ),
  content: classNames(
    'relative',
    'mb-2 p-2',
    'flex justify-between',
    'font-sans text-lg',
    'transition duration-300 ease-in-out'
  ),
  buttonGroup: classNames('flex', 'gap-2'),
};

export default style;
