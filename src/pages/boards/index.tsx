import { Spinner } from '@/components/Spinner'
import useBoard from '@/hooks/useBoard'
import { IoFilter, IoPencilOutline, IoSearchOutline } from 'react-icons/io5'

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
    <div className="p-14">
      <fieldset className="flex text-ellipsis overflow-hidden w-full py-2 items-center">
        {visible && (
          <div className="text-3xl text-black-500 mr-4 font-medium ">
            {loadingBoardTitle ? <Spinner /> : boardTitle}
          </div>
        )}

        {!visible && (
          <input
            className="text-3xl shadow-md rounded-md py-2 px-4  mr-4 font-medium placeholder:text-black-400 text-black-500"
            type="text"
            value={boardTitle}
            onBlur={onUpdateBoardTitle}
            onChange={onChangeBoardTitle}
            onKeyUp={onEnter}
          />
        )}

        {!loadingBoardTitle && (
          <button
            className="flex justify-center items-center rounded-md hover:shadow-md transition-shadow p-2"
            onClick={onChangeVisible}
          >
            <IoPencilOutline className="text-purple-500 cursor-pointer w-6 h-6 m-1" />
          </button>
        )}
      </fieldset>

      <div className="mt-8 flex w-full gap-4">
        <button className="bg-purple-500 rounded-md px-8 py-3 text-white-500 flex items-center gap-2 transition-all hover:shadow-md hover:bg-white-500 hover:border-purple-500 hover:text-purple-500 border duration-300">
          <IoFilter />
          <span>Filtrar</span>
        </button>

        <fieldset className="w-full relative">
          <IoSearchOutline className="absolute h-full mx-4 w-6 text-black-400" />
          <input
            className="transition-shadow duration-300 hover:shadow-md rounded-md w-full pl-12 p-4 placeholder:text-black-400 text-black-500"
            type="text"
            placeholder="Busque por cards, assuntos ou responsáveis..."
            name=""
            id=""
          />
        </fieldset>
      </div>
    </div>
  )
}

export default BoardsPage
