/*
 * @Author: CL
 * @Date: 2026-03-28 09:55:37
 * @LastEditTime: 2026-03-28 10:43:50
 * @Description: 游戏信息展示组件
 */

import React, { useMemo } from 'react'
import { chessType, gameStatus } from '../../types/enums'
import './index.css'

interface IProps {
  status: gameStatus,
  nextChess: chessType.black | chessType.red
}

const Index: React.FC<IProps> = ({ status, nextChess }) => {
  const info: React.JSX.Element = useMemo(() => {
    if (status === gameStatus.gaming) {
      return nextChess === chessType.red ? <div className='step-info red'>红方落子</div> : <div className='step-info black'>黑方落子</div>
    } else {
      if (status === gameStatus.redWin) {
        return <div className='win-info red'>红方胜利</div>
      } else if (status === gameStatus.blackWin) {
        return <div className='win-info black'>黑方胜利</div>
      } else {
        return <div className='win-info equal'>平局</div>
      }
    }
  }, [status, nextChess])

  return (
    <div className='gameinfo'>{ info }</div>
  )
}

export default Index

