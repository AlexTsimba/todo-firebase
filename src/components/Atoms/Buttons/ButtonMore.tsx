// import React from 'react';
// import { EllipsisVerticalIcon } from '@heroicons/react/24/outline';
// import classNames from 'classnames';
// import style from './style';

// interface ButtonMoreProps {
//   onClick: () => void;
//   isFirst?: boolean;
//   isLast?: boolean;
// }

// const ButtonMore: React.FC<ButtonMoreProps> = ({
//   onClick,
//   isFirst,
//   isLast,
// }) => {
//   return (
//     <button
//       id="test1"
//       type="button"
//       className={classNames(
//         style.button,
//         { [style.roundTopRight]: isFirst },
//         { [style.roundBototmRight]: isLast }
//       )}
//       onClick={onClick}
//     >
//       <EllipsisVerticalIcon className={style.icon} />
//     </button>
//   );
// };

// ButtonMore.defaultProps = {
//   isFirst: false,
//   isLast: false,
// };

// export default ButtonMore;
import React from 'react';
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';
import style from './style';

interface ButtonMoreProps {
  onClick: () => void;
  isFirst?: boolean;
  isLast?: boolean;
}

const ButtonMore: React.FC<ButtonMoreProps> = ({
  onClick,
  isFirst,
  isLast,
}) => {
  return (
    <button
      type="button"
      className={classNames(
        style.button,
        { [style.roundTopRight]: isFirst },
        { [style.roundBototmRight]: isLast }
      )}
      onClick={onClick}
    >
      <EllipsisVerticalIcon className={style.icon} />
    </button>
  );
};

ButtonMore.defaultProps = {
  isFirst: false,
  isLast: false,
};

export default ButtonMore;
