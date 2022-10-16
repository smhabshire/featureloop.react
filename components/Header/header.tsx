import { FaCaretDown } from 'react-icons/fa';
import DashboardContentWrapper from '../Content/DashboardContentWrapper';

const Header = () => {
  return (
    <div className="flex flex-row justify-center items-center bg-black h-14 text-white text-sm md:text-base">
      <DashboardContentWrapper direction="row" justify="between" align="center">
        <div className="flex items-center text-2xl font-semibold hover:cursor-pointer">
          <img
            className="w-8 h-8 mr-2"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
            alt="logo"
          />
          <div className="hidden sm:block">Featureloop</div>
        </div>
        <div className="flex flex-row items-center space-x-2 hover:cursor-pointer">
          <div>Cuteshoots</div>
          <FaCaretDown />
        </div>
        <div className="flex justify-end items-center space-x-2">
          <div className="w-8 h-8 flex justify-center items-center rounded-full bg-slate-400">
            A
          </div>
          <div className="hidden sm:block">Shawn Abshire</div>
          <FaCaretDown />
        </div>
      </DashboardContentWrapper>
    </div>
  );
};

export default Header;
