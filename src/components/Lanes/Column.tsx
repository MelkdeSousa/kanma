import { Card } from "../Card"

export type ColumnProps = {
  items: {
    title: string
    description: string
    tags: string[]
  }[]
}

export const Column = ({ items }: ColumnProps) => {
  return (
    <ul key={Math.random()} className='list-none flex flex-col w-full gap-6'>
      {items.map((item, index) => (
        <li key={Math.random()} className='list-none'>
          <Card
            key={Math.random()}
            title={item.title}
            description={item.description}
            tags={item.tags}
          />
        </li>
      ))}
    </ul>
  )
}
