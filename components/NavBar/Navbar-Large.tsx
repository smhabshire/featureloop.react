import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import DashboardContentWrapper from '../Content/DashboardContentWrapper';
import { menu } from './routes';

const NavBarLarge = () => {
  const router = useRouter();
  const current = (route: string) => router.pathname === route;

  return (
    <div className="hidden sm:flex flex-row justify-center items-center border border-b-1 border-b-slate-200 h-14 mb-2 shadow-sm bg-white">
      <DashboardContentWrapper direction="row">
        <ul className="flex flex-row w-full">
          {menu.map(({ menuItems }) =>
            menuItems.map(({ id, title, icon, target }) => (
              <Link href={target} key={id}>
                <li
                  className={clsx(
                    'flex flex-row items-center space-x-2 pr-6 hover:cursor-pointer text-sm lg:text-base hover:text-blue-500',
                    current(target) && 'text-blue-500'
                  )}
                >
                  <div className="hidden md:block">{icon}</div>
                  <div>{title}</div>
                </li>
              </Link>
            ))
          )}
        </ul>
      </DashboardContentWrapper>
    </div>
  );
};

export default NavBarLarge;
