import NavBar from '@/components/NavBar/NavBar';

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex bg-slate-50 h-screen">
      <div className="flex flex-col w-72 h-screen px-4 py-8 overflow-y-auto border-r bg-white">
        <h2 className="text-3xl font-semibold text-center text-blue-400">Featureloop</h2>
        <div className="flex flex-col justify-between mt-6">
          <NavBar />
        </div>
      </div>

      <div className="w-full min-h-96 p-4 m-8 overflow-y-auto">
        <div className="flex max-w-7xl mx-auto ">
          { children }
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout;