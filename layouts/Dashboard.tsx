import DashboardContentWrapper from '@/components/Content/DashboardContentWrapper';
import Header from '@/components/Header/header';
import NavBarLarge from '@/components/NavBar/Navbar-Large';
import NavBarSmall from '@/components/NavBar/Navbar-Small';

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex flex-col justify-start h-screen bg-slate-50">
      <Header />
      <NavBarLarge />
      <NavBarSmall />

      <div className="flex justify-center">
        <DashboardContentWrapper>{children}</DashboardContentWrapper>
      </div>
    </div>
  );
};

export default DashboardLayout;
