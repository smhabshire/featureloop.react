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

export type MenuItem = {
  id: number;
  title: string;
  target?: string;
  icon?: ReactNode;
  active?: boolean;
};

export type Route = {
  id: number;
  header: string;
  menuItems: MenuItem[];
};

export const menu: Route[] = [
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
        target: '/dashboard/posts',
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
