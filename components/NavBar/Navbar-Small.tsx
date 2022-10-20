import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Popup from '../Popup/Popup';
import { menu, Route } from './routes';

const NavBarSmall = () => {
  const router = useRouter();
  const currentRoute = (route: Route) =>
    route.menuItems.some((x) => x.target == router.pathname);
  const currentPage = (route: string) => router.pathname === route;

  return (
    <div className="inline-flex sm:hidden items-center border border-b-1 border-b-slate-200 h-14 mb-2 shadow-sm bg-white text-sm">
      {menu.map((route) => {
        return (
          <Popup
            label={route.header}
            closeOnClick={true}
            className={clsx(currentRoute(route) && 'text-blue-500')}
            key={route.id}
          >
            {route.menuItems.map(({ id, title, icon, target }) => (
              <Link key={id} href={target}>
                <div
                  className={clsx(
                    'p-2 inline-flex w-36 space-x-2 rounded-lg transition duration-150 ease-in-out items-center hover:bg-gray-200 hover:cursor-pointer',
                    currentPage(target) && 'text-blue-500'
                  )}
                >
                  <div>{icon}</div>
                  <div>{title}</div>
                </div>
              </Link>
            ))}
          </Popup>
        );
      })}
    </div>
  );
};

export default NavBarSmall;
