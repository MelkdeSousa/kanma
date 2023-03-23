import { ChangeEvent, KeyboardEvent, useState } from 'react'

const useBoard = () => {
  const [boardTitle, setBoardTitle] = useState('New Board')
  const [visible, setVisible] = useState(true)
  const [loadingBoardTitle, setLoadingBoardTitle] = useState(false)

  const onChangeBoardTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setBoardTitle(e.target.value)
  }

  const onChangeVisible = () => {
    setVisible(!visible)
  }

  const onEnter = (e?: KeyboardEvent<HTMLInputElement>) => {
    e?.preventDefault()

    if (e?.key === 'Enter') {
      onUpdateBoardTitle()
    }
  }

  const onUpdateBoardTitle = async () => {
    onChangeVisible()
    setLoadingBoardTitle(true)

    return new Promise((resolve) => {
      setTimeout(() => {
        setLoadingBoardTitle(false)
        resolve(undefined)
      }, 1000)
    })
  }

  return {
    boardTitle,
    visible,
    onChangeVisible,
    onChangeBoardTitle,
    onEnter,
    onUpdateBoardTitle,
    loadingBoardTitle,
  }
}

export default useBoard
