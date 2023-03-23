import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'

export type SidebarButtonProps = {
  title: string
  icon: JSX.Element
  href: string
}

export const SidebarButton = ({ icon, title, href }: SidebarButtonProps) => {
  const route = useRouter()
  const active = route.pathname === href

  return (
    <Link
      href={href}
      className={clsx(
        'cursor-pointer rounded-md px-4 py-2 font-bold text-2xl flex items-center gap-x-4 text-white-500 transition-colors hover:bg-white-500 hover:text-purple-500',
        {
          'text-opacity-60': !active,
          'text-opacity-100': active,
        },
      )}
    >
      <span>{icon}</span>
      <span>{title}</span>
    </Link>
  )
}
