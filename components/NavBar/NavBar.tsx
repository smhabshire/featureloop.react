import { ReactNode } from 'react';
import { FaAlignJustify, FaChartLine, FaCog, FaInbox, FaMap, FaQuestion, FaSatelliteDish, FaUsers } from "react-icons/fa";

interface MenuItem {
  id: number;
  title: string;
  target?: string;
  icon?: ReactNode,
  active?: boolean;
}

interface Route {
  id: number;
  header: string;
  menuItems: MenuItem[];
}

const menu: Route[]  = [
  {
    id: 1,
    header: "Quick Access",
    menuItems: [
      {
        id: 1,
        title: "Inbox",
        icon: <FaInbox />,
      },
      {
        id: 2,
        title: "Statistics",
        icon: <FaChartLine />,
      },
      {
        id: 3,
        title: "Live Board",
        icon: <FaSatelliteDish />,
      },
    ],
  },
  {
    id: 2,
    header: "Modules",
    menuItems: [
      {
        id: 1,
        title: "All Posts",
        icon: <FaAlignJustify />,
      },
      {
        id: 2,
        title: "Roadmap",
        icon: <FaMap />,
      },
      {
        id: 3,
        title: "Changelog",
        icon: <FaQuestion />,
      },
    ],
  },
  {
    id: 3,
    header: "Organization",
    menuItems: [
      {
        id: 1,
        title: "Team Members",
        icon: <FaUsers />,
      },
      {
        id: 2,
        title: "Settings",
        icon: <FaCog />,
      },
    ],
  },
];

const MenuGroup = ({ header, menuItems }) => (
  <>
    <h2 className="text-slate-400 font-bold text-sm uppercase pb-2">{header}</h2>
    <ul className="pb-7">
      {menuItems.map(({ id, title, icon }) => (
        <div key={id} className="flex items-center px-4 py-1.5 text-gray-700 rounded-md hover:cursor-pointer hover:bg-gray-100">
          {icon}<li className="mx-4 font-bold text-xs">{title}</li>
        </div>
      ))}
    </ul>
  </>
);

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