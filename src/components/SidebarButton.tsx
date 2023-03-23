import Link from 'next/link'

export type SidebarButtonProps = {
  title: string
  icon: JSX.Element
  href: string
}

export const SidebarButton = ({ icon, title, href }: SidebarButtonProps) => {
  const active =
    href === (typeof window !== 'undefined' ? window.location.pathname : '')

  return (
    <Link
      href={href}
      className={`"cursor-pointer rounded-md px-4 text-opacity-${
        active ? '100' : '60'
      } py-2 font-bold text-2xl flex items-center gap-x-4 text-white-500 transition-colors hover:bg-white-500 hover:text-purple-500"`}
    >
      <span>{icon}</span>
      <span>{title}</span>
    </Link>
  )
}
