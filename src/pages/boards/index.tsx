import { Card } from "@/components/Card"
import { Spinner } from "@/components/Spinner"
import lanes from "@/constants/lanes"
import useBoard from "@/hooks/useBoard"
import { IoFilter, IoPencilOutline, IoSearchOutline } from "react-icons/io5"

const BoardsPage = () => {
  const {
    boardTitle,
    onChangeVisible,
    visible,
    onChangeBoardTitle,
    loadingBoardTitle,
    onEnter,
    onUpdateBoardTitle,
  } = useBoard()

  return (
    <div className='p-14 w-full flex flex-col h-full'>
      <fieldset className='flex text-ellipsis w-full py-2 items-center'>
        {visible && (
          <div className='text-3xl text-black-500 mr-4 font-medium '>
            {loadingBoardTitle ? <Spinner /> : boardTitle}
          </div>
        )}

        {!visible && (
          <input
            className='text-3xl shadow-md rounded-md py-2 px-4 ml-[2px] mr-4 font-medium placeholder:text-black-400 text-black-500 outline-purple-500'
            type='text'
            value={boardTitle}
            onBlur={onUpdateBoardTitle}
            onChange={onChangeBoardTitle}
            onKeyUp={onEnter}
          />
        )}

        {!loadingBoardTitle && (
          <button
            className='flex justify-center items-center rounded-md hover:shadow-md transition-shadow p-2'
            onClick={onChangeVisible}
          >
            <IoPencilOutline className='text-purple-500 cursor-pointer w-6 h-6 m-1' />
          </button>
        )}
      </fieldset>

      <div className='mt-8 flex w-full gap-4'>
        <button className='bg-purple-500 rounded-md px-8 py-3 text-white-500 flex items-center text-lg gap-2 transition-all hover:shadow-md hover:bg-white-500 hover:border-purple-500 hover:text-purple-500 border duration-300'>
          <IoFilter />
          <span>Filtrar</span>
        </button>

        <fieldset className='w-full relative'>
          <IoSearchOutline className='absolute h-full mx-4 w-6 text-black-400' />
          <input
            className='transition-shadow duration-300 hover:shadow-md rounded-md w-full pl-12 p-4 placeholder:text-black-400 text-black-500 text-lg outline-purple-500'
            type='text'
            placeholder='Busque por cards, assuntos ou responsáveis...'
            name=''
            id=''
          />
        </fieldset>
      </div>

      <div className='flex mt-8 gap-y-6 justify-between flex-1 flex-col overflow-y-auto'>
        <div className='flex gap-6'>
          {lanes.map((lane, index) => (
            <h2
              key={Math.random()}
              className='text-black-500 text-2xl font-semibold w-full'
            >
              {lane.title}
            </h2>
          ))}
        </div>

        <div className='flex flex-1 overflow-auto gap-6'>
          {lanes.map((lane, index) => (
            <ul
              key={Math.random()}
              className='list-none flex flex-col w-full gap-6'
            >
              {lane.items.map((item, index) => (
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
          ))}
        </div>
      </div>
    </div>
  )
}

export default BoardsPage
