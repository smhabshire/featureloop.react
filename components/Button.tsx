type Props = {
  onClick?: () => void;
  children: JSX.Element | string;
};

export const Button = ({ onClick, children }: Props) => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      type="button"
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
};
