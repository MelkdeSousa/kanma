import { SidebarButton } from '@/components/SidebarButton'
import Image from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'
import { IoTabletPortraitOutline } from 'react-icons/io5'

export type LayoutProps = {
  children: ReactNode
}

const sidebarButtons = [
  {
    title: 'Boards',
    icon: <IoTabletPortraitOutline />,
    href: '/boards',
  },
  // {
  //   title: 'Teams',
  //   icon: <IoPeopleOutline />,
  //   href: '/teams',
  // },
  // {
  //   title: 'Reports',
  //   icon: <IoClipboardOutline />,
  //   href: '/reports',
  // },
  // {
  //   title: 'Settings',
  //   icon: <IoSettingsOutline />,
  //   href: '/settings',
  // },
]

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="bg-purple-500 h-screen flex">
      <aside className="w-fit h-full p-9 flex flex-col items-center">
        <Link href="/">
          <Image
            className="w-14 h-auto cursor-pointer"
            src="/logo.svg"
            alt="logo"
            width={300}
            height={300}
          />
        </Link>

        <nav className="flex flex-1 flex-col mt-9 gap-6">
          {sidebarButtons.map((button) => (
            <SidebarButton key={button.title} {...button} />
          ))}
        </nav>
      </aside>
      <main className="bg-white-500 w-full h-auto mt-1 rounded-tl-3xl">
        {children}
      </main>
    </div>
  )
}
