import clsx from 'clsx';

type Props = {
  children: React.ReactNode;
  direction?: string;
  justify?: string;
  align?: string;
};

const DashboardContentWrapper = ({
  children,
  direction = 'row',
  justify = 'start',
  align = 'start',
}: Props) => {
  return (
    <div
      className={clsx(
        `flex flex-${direction} justify-${justify} items-${align} w-full 2xl:w-2/3 pl-4 pr-4 text-sm md:text-base sm:text-sm`
      )}
    >
      {children}
    </div>
  );
};

export default DashboardContentWrapper;
