import { DetailedHTMLProps, HTMLAttributes } from "react"

export type CardProps = DetailedHTMLProps<
  HTMLAttributes<HTMLElement>,
  HTMLElement
> & {
  title: string
  description: string
  tags: string[]
}

export const Card = ({ description, tags, title, ...props }: CardProps) => {
  return (
    <article
      className=' bg-white-100 gap-y-2 flex flex-col p-6 transition-shadow shadow-sm hover:shadow-md rounded-lg cursor-pointer'
      draggable
      {...props}
    >
      <h3 className='font-medium text-lg text-black-500'>{title}</h3>

      <p className='truncate font-normal text-lg text-black-400'>
        {description}
      </p>

      <ul className='flex gap-2'>
        {tags.map((tag) => (
          <li
            className='text-purple-500 font-semibold bg-purple-100 rounded-lg px-2 py-1'
            key={Math.random()}
          >
            {tag}
          </li>
        ))}
      </ul>
    </article>
  )
}
