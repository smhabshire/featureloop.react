import DashboardContentWrapper from '@/components/Content/DashboardContentWrapper';
import Header from '@/components/Header/header';
import NavBar from '@/components/NavBar/Navbar';

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex flex-col justify-start h-screen bg-slate-50">
      <Header />
      <NavBar />

      <div className="flex justify-center">
        <DashboardContentWrapper>{children}</DashboardContentWrapper>
      </div>
    </div>
  );
};

export default DashboardLayout;
