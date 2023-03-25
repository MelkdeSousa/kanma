import { CardProps } from "./Card"
import { Column } from "./Lanes/Column"
import { Title } from "./Lanes/Title"

export type Lane = {
  title: string
  items: CardProps[]
}

export type LanesProps = {
  lanes: Lane[]
}

export const Lanes = ({ lanes }: LanesProps) => {
  return (
    <div className='flex mt-8 gap-y-6 justify-between flex-1 flex-col overflow-y-auto'>
      <div className='flex gap-6'>
        {lanes.map((lane, index) => (
          <Title key={Math.random()} title={lane.title} />
        ))}
      </div>

      <div className='flex flex-1 overflow-auto gap-6'>
        {lanes.map((lane, index) => (
          <Column key={Math.random()} items={lane.items} />
        ))}
      </div>
    </div>
  )
}
