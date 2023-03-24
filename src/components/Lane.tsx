import { Card, CardProps } from "./Card"

export type LaneProps = {
  title: string
  items: CardProps[]
}

export const Lane = ({ title, items }: LaneProps) => {
  return (
    <section className='w-full h-full'>
      <h2 className='mb-6 text-black-500 text-2xl font-semibold'>{title}</h2>

      <ul className='list-none flex flex-col gap-6'>
        {items.map((item, index) => (
          <li key={Math.random()} className='list-none'>
            <Card
              title={item.title}
              description={item.description}
              tags={item.tags}
            />
          </li>
        ))}
      </ul>
    </section>
  )
}
