import clsx from 'clsx';

const Box = ({ className, children }) => {
  return (
    <div
      className={clsx(
        'bg-white rounded border border-color-box-border',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Box;
