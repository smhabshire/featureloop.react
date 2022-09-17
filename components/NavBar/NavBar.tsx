import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import {
  FaAlignJustify,
  FaChartLine,
  FaCog,
  FaInbox,
  FaMap,
  FaQuestion,
  FaSatelliteDish,
  FaUsers,
} from 'react-icons/fa';

interface MenuItem {
  id: number;
  title: string;
  target?: string;
  icon?: ReactNode;
  active?: boolean;
}

interface Route {
  id: number;
  header: string;
  menuItems: MenuItem[];
}

const menu: Route[] = [
  {
    id: 1,
    header: 'Quick Access',
    menuItems: [
      {
        id: 1,
        title: 'Inbox',
        icon: <FaInbox />,
        target: '/dashboard',
      },
      {
        id: 2,
        title: 'Statistics',
        icon: <FaChartLine />,
        target: '/dashboard/stats',
      },
      {
        id: 3,
        title: 'Live Board',
        icon: <FaSatelliteDish />,
        target: '/dashboard/liveboard',
      },
    ],
  },
  {
    id: 2,
    header: 'Modules',
    menuItems: [
      {
        id: 1,
        title: 'All Posts',
        icon: <FaAlignJustify />,
        target: '/dashboard/features',
      },
      {
        id: 2,
        title: 'Roadmap',
        icon: <FaMap />,
        target: '/dashboard/roadmap',
      },
      {
        id: 3,
        title: 'Changelog',
        icon: <FaQuestion />,
        target: '/dashboard/changelog',
      },
    ],
  },
  {
    id: 3,
    header: 'Organization',
    menuItems: [
      {
        id: 1,
        title: 'Team Members',
        icon: <FaUsers />,
        target: '/dashboard/members',
      },
      {
        id: 2,
        title: 'Settings',
        icon: <FaCog />,
        target: '/dashboard/settings',
      },
    ],
  },
];

const MenuGroup = ({ header, menuItems }) => {
  const router = useRouter();

  return (
    <>
      <h2 className="text-slate-400 font-bold text-sm uppercase pb-2">
        {header}
      </h2>
      <ul className="pb-7">
        {menuItems.map(({ id, title, icon, target }) => (
          <Link href={target} key={id}>
            <li
              className={clsx(
                'flex flex-row items-center justify-start font-bold pb-2 px-2 py-1.5 text-sm text-gray-700 rounded-md hover:cursor-pointer',
                router.pathname === target
                  ? 'text-blue-500'
                  : 'hover:bg-gray-100 hover:text-blue-500'
              )}
            >
              <span className="pr-4">{icon}</span>
              {title}
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
};

export default function Navbar() {
  return (
    <nav>
      <div className="px-4 py-1.5">
        {menu.map(({ id, header, menuItems }) => (
          <MenuGroup key={id} header={header} menuItems={menuItems} />
        ))}
      </div>
    </nav>
  );
}
