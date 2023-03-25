export type TitleProps = {
  title: string
}

export const Title = ({ title }: TitleProps) => {
  return (
    <h2 className='text-black-500 text-2xl font-semibold w-full'>{title}</h2>
  )
}
