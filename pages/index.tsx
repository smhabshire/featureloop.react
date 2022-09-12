import { FaAlignJustify, FaChartLine, FaCog, FaInbox, FaMap, FaQuestion, FaSatelliteDish, FaUsers } from "react-icons/fa";
import { useChangelogCategoriesQuery } from '../generated/graphql';

const menu = [
  {
    header: "Quick Access",
    menuItems: [
      {
        title: "Inbox",
        icon: <FaInbox />,
      },
      {
        title: "Statistics",
        icon: <FaChartLine />,
      },
      {
        title: "Live Board",
        icon: <FaSatelliteDish />,
      },
    ],
  },
  {
    header: "Modules",
    menuItems: [
      {
        title: "All Posts",
        icon: <FaAlignJustify />,
      },
      {
        title: "Roadmap",
        icon: <FaMap />,
      },
      {
        title: "Changelog",
        icon: <FaQuestion />,
      },
    ],
  },
  {
    header: "Organization",
    menuItems: [
      {
        title: "Team Members",
        icon: <FaUsers />,
      },
      {
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
      {menuItems.map(({ title, icon }, index) => (
        <div key={index} className="flex items-center px-4 py-1.5 text-gray-700 rounded-md hover:cursor-pointer hover:bg-gray-100">
          {icon}<li className="mx-4 font-bold text-xs">{title}</li>
        </div>
      ))}
    </ul>
  </>
);

export default function Navbar() {
  const { data } = useChangelogCategoriesQuery();

  console.log('data', data);

  return (
    <nav className="navigation">
      <div className="px-4 py-1.5">
        {menu.map(({ header, menuItems }, index) => (
          <MenuGroup key={index} header={header} menuItems={menuItems} />
        ))}
      </div>
    </nav>
  );
}