import DashboardLayout from '@/layouts/Dashboard';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import {
  FaAngleDoubleRight,
  FaArrowUp,
  FaCircleNotch,
  FaClipboardList,
  FaCode,
  FaCreditCard,
  FaDiscord,
  FaEnvelope,
  FaHouseUser,
  FaICursor,
  FaLayerGroup,
  FaLock,
  FaMap,
  FaSwatchbook,
  FaTag,
  FaUnlock,
  FaUsers,
  FaWaveSquare,
} from 'react-icons/fa';
import Accessibility from './settings/accessibility';
import Branding from './settings/branding';

interface Link {
  id: number;
  name: string;
  icon: ReactNode;
  component?: ReactNode;
  href?: string;
}

const generalSettings: Link[] = [
  {
    id: 1,
    name: 'Branding',
    icon: <FaSwatchbook />,
    component: <Branding />,
    href: '/dashboard/settings/branding',
  },
  {
    id: 2,
    name: 'Accessibility',
    icon: <FaLock />,
    component: <Accessibility />,
    href: '/dashboard/settings/accessibility',
  },
  {
    id: 3,
    name: 'Team Members',
    icon: <FaUsers />,
    href: '/dashboard/settings/accessibility',
  },
  {
    id: 4,
    name: 'Custom Domain',
    icon: <FaHouseUser />,
    href: '/dashboard/settings/accessibility',
  },
  {
    id: 5,
    name: 'Pricing Plans',
    icon: <FaCreditCard />,
    href: '/dashboard/settings/accessibility',
  },
];

const otherSettings: Link[] = [
  {
    id: 1,
    name: 'Categories',
    icon: <FaLayerGroup />,
    href: '/dashboard/settings/accessibility',
  },
  {
    id: 2,
    name: 'Statuses',
    icon: <FaWaveSquare />,
    href: '/dashboard/settings/accessibility',
  },
  {
    id: 3,
    name: 'Tags',
    icon: <FaTag />,
    href: '/dashboard/settings/accessibility',
  },
  {
    id: 4,
    name: 'Typography',
    icon: <FaICursor />,
    href: '/dashboard/settings/accessibility',
  },
  {
    id: 5,
    name: 'Permissions',
    icon: <FaUnlock />,
    href: '/dashboard/settings/accessibility',
  },
  {
    id: 6,
    name: 'Voting',
    icon: <FaArrowUp />,
    href: '/dashboard/settings/accessibility',
  },
  {
    id: 7,
    name: 'Roadmap',
    icon: <FaMap />,
    href: '/dashboard/settings/accessibility',
  },
  {
    id: 8,
    name: 'Changelog',
    icon: <FaArrowUp />,
    href: '/dashboard/settings/accessibility',
  },
  {
    id: 9,
    name: 'Integrations',
    icon: <FaCircleNotch />,
    href: '/dashboard/settings/accessibility',
  },
  {
    id: 10,
    name: 'SSO',
    icon: <FaLock />,
    href: '/dashboard/settings/accessibility',
  },
  {
    id: 11,
    name: 'Embed Board',
    icon: <FaCode />,
    href: '/dashboard/settings/accessibility',
  },
  {
    id: 12,
    name: 'Customize Emails',
    icon: <FaEnvelope />,
    href: '/dashboard/settings/accessibility',
  },
  {
    id: 13,
    name: 'Widget',
    icon: <FaClipboardList />,
    href: '/dashboard/settings/accessibility',
  },
  {
    id: 14,
    name: 'Authentication',
    icon: <FaAngleDoubleRight />,
    href: '/dashboard/settings/accessibility',
  },
  {
    id: 15,
    name: 'Discord Bot',
    icon: <FaDiscord />,
    href: '/dashboard/settings/accessibility',
  },
];

type MenuProps = {
  title: string;
  settings: Link[];
};

const MenuItem = ({ title, settings }: MenuProps) => {
  const router = useRouter();

  return (
    <>
      <h3 className="uppercase text-[11px] text-slate-500 font-bold pb-3">
        {title}
      </h3>
      <ul>
        {settings.map((setting) => (
          <Link href={setting.href} key={setting.id}>
            <li
              className={clsx(
                'flex flex-row flex-nowrap text-base text-slate-700 px-2 py-1 mb-1 rounded border-transparent border hover:border-slate-300 hover:bg-white hover:shadow hover:cursor-pointer',
                router.pathname === setting.href &&
                  'border rounded bg-white border-slate-300 shadow'
              )}
            >
              <span className="w-6 text-sm self-center">{setting.icon}</span>
              <span className="text-sm">{setting.name}</span>
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
};

const Settings = () => {
  return (
    <div className="flex flex-col grow">
      <h1 className="font-bold text-4xl mb-4">Settings</h1>

      <div className="flex flex-row w-full space-x-6">
        <div className="w-2/12">
          <MenuItem title={'General Settings'} settings={generalSettings} />

          <MenuItem title={'Other Settings'} settings={otherSettings} />
        </div>

        <div className="w-10/12 grow">I dunno dood</div>
      </div>
    </div>
  );
};

Settings.layout = DashboardLayout;

export default Settings;
