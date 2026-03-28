/*
 * @Author: CL
 * @Date: 2026-03-27 23:37:04
 * @LastEditTime: 2026-03-28 00:22:34
 * @Description: 棋盘组件
 */

import React, { useState } from 'react'
import { chessSize, chessType } from '../../types/enums'
import ChessComp from '../ChessComp'
import './index.css'

interface IProps {
  chesses: chessType []  // 棋子数据
  isGameOver? : boolean  // 游戏是否结束
  click: (index: number) => void
}

const Index: React.FC<IProps> = ({ chesses, isGameOver = false, click }) => {
  const [ size ] = useState(chessSize.size80)

  const chessesList = chesses.map((type, index) => <ChessComp size={ size } key={ index } type={ type } clickChess={ () => clickChess(index) } />)

  const clickChess = (index: number) => {
    if (isGameOver) return
    click(index)
  }

  return (
    <div className='board' style={{ width: `${size * 3}px`, height: `${size * 3}px` }}>
      { chessesList }
    </div>
  )
}

export default Index

