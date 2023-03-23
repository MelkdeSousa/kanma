import { useRef, useState } from 'react'
import { IoFilter, IoPencilOutline, IoSearchOutline } from 'react-icons/io5'

const BoardsPage = () => {
  const boardTitleRef = useRef<HTMLInputElement>(null)
  const [boardTitle, setBoardTitle] = useState('New Board')
  const [visible, setVisible] = useState(true)

  return (
    <div className="p-14">
      <fieldset className="flex text-ellipsis overflow-hidden w-full py-2 items-center">
        {visible && (
          <div className="text-3xl text-black-500 mr-4 font-medium ">
            {boardTitle}
          </div>
        )}
        {!visible && (
          <input
            ref={boardTitleRef}
            className="text-3xl shadow-md rounded-md py-2 px-4  mr-4 font-medium placeholder:text-black-400 text-black-500"
            type="text"
            value={boardTitle}
            onBlur={() => setVisible(true)}
            onChange={(e) => setBoardTitle(e.target.value)}
            onKeyUp={(e) => e.key === 'Enter' && setVisible(true)}
          />
        )}
        <button
          className="flex justify-center items-center rounded-md hover:shadow-md transition-shadow  p-2"
          onClick={() => setVisible((prev) => !prev)}
        >
          <IoPencilOutline className="text-purple-500 cursor-pointer w-6 h-6 m-1" />
        </button>
      </fieldset>

      <div className="mt-8 flex w-full gap-4">
        <button className="bg-purple-500 rounded-md px-8 py-3 text-white-500 flex items-center gap-2 shadow-lg">
          <IoFilter />
          <span>Filtrar</span>
        </button>

        <fieldset className="w-full relative">
          <IoSearchOutline className="absolute h-full mx-4 w-6 text-black-400" />
          <input
            className="shadow-md rounded-md w-full pl-12 p-4 placeholder:text-black-400 text-black-500"
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
