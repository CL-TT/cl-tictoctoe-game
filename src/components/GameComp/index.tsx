/*
 * @Author: CL
 * @Date: 2026-03-28 09:38:38
 * @LastEditTime: 2026-03-28 11:03:08
 * @Description: 游戏组件
 */

import React, { useState, useEffect } from 'react'
import { chessType, gameStatus, } from '../../types/enums'
import BoardComp from '../BoardComp'
import GameInfoComp from '../GameInfoComp'
import './index.css'

const Index = () => {
  let [ chessList, setChessList ] = useState<chessType[]>([])  // 棋子数组
  let [ status, setStatus ] = useState<gameStatus>(gameStatus.gaming) // 游戏状态
  let [ nextChess, setNextChess ] = useState<chessType.black | chessType.red>(chessType.red) // 下一步该谁走

  useEffect(() => {
    initGame()
  }, [])

  /**
   * 初始化游戏
   */
  const initGame = () => {
    let temp: chessType[] = []
    for (let i = 1; i <= 9; i++) {
      temp.push(chessType.none)
    }
    setChessList(temp)
    setStatus(gameStatus.gaming)
    setNextChess(chessType.red)
  }

  /**
   * 点击棋子的格子
   * 我在下每一步的时候，都需要判断游戏有没有结束
   */
  const handleChessClick = (index: number) => {
    const temp: chessType[] = [...chessList]
    temp[index] = nextChess
    setChessList(temp)
    setNextChess(nextChess === chessType.red? chessType.black : chessType.red)
    setStatus(handleGameStatus(temp, index))
  }

  /**
   * 判断落子之后的游戏状态
   */
  const handleGameStatus = (chessList: chessType[], index: number) => {
    // 落子时有没有胜利, 分横向，纵向，斜线
    const minIndex = Math.floor(index / 3) * 3
    const colMinIndex = index % 3
    if (
      (chessList[minIndex] === chessList[minIndex + 1] && chessList[minIndex] === chessList[minIndex + 2])
      || (chessList[colMinIndex] === chessList[colMinIndex + 3] && chessList[colMinIndex] === chessList[colMinIndex + 6])
      || (chessList[0] === chessList[4] && chessList[0] === chessList[8] && chessList[0] != chessType.none)
      || (chessList[2] === chessList[4] && chessList[2] === chessList[6] && chessList[2] !== chessType.none)
    ) {
      return nextChess === chessType.red ? gameStatus.redWin : gameStatus.blackWin
    }
    // 全部落子后，平局
    if (!chessList.includes(chessType.none)) {
      return gameStatus.equal
    }
    return gameStatus.gaming
  }

  return (
    <div className='game'>
      <h1>井字棋游戏</h1>
      <GameInfoComp status={ status } nextChess={ nextChess } />
      <BoardComp isGameOver={ status !== gameStatus.gaming } chesses={ chessList } click={ handleChessClick } />
      <button style={{ width: '100px', height: '50px', fontSize: '18px' }} onClick={ initGame }>重新开始</button>
    </div>
  )
}

export default Index

