import classNames from 'classnames';

const style = {
  button: classNames(
    'px-2 py-1',
    'transition duration-300 ease-in-out',
    'transform',
    'rounded-lg',
    'text-md leading-normal text-color-text-primary',
    'hover:bg-primary-button hover:scale-110'
  ),
  insideInput: classNames(
    'px-4 py-2',
    'absolute right-4 top-1/2',
    'transform -translate-y-1/2',
    'rounded-tr-2xl rounded-br-2xl',
  ),
  icon: classNames('h-4'),
  groupHover: classNames('invisible group-hover:visible'),
  draggable: classNames('cursor-grab', 'active:cursor-grabbing'),
  roundTopRight: classNames('rounded-tr-2xl'),
  roundBototmRight: classNames('rounded-br-2xl'),
};

export default style;
