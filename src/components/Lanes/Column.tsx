import { useDroppable } from "@dnd-kit/core"
import clsx from "clsx"
import { useId } from "react"
import { Card } from "../Card"

export type ColumnProps = {
  items: {
    title: string
    description: string
    tags: string[]
  }[]
}

export const Column = ({ items }: ColumnProps) => {
  const id = useId()

  const { setNodeRef } = useDroppable({
    id,
  })

  return (
    <ul
      ref={setNodeRef}
      key={Math.random()}
      className={clsx("list-none flex flex-col w-full gap-6")}
    >
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
