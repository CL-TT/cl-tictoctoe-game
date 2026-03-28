/*
 * @Author: CL
 * @Date: 2026-03-27 22:39:00
 * @LastEditTime: 2026-03-28 00:09:24
 * @Description: 棋子类
 */

import React, { useMemo } from 'react'
import './index.css'
import { chessSize, chessType } from '../../types/enums'

interface IProps {
  type: chessType  // 棋子类型
  clickChess: () => void
  size?: number     // 棋子容器的尺寸
}


// 默认值直接在结构的时候就可以赋值了
const Index: React.FC<IProps> = ({ type, clickChess, size = chessSize.size80 }) => {

  // 棋子展示的内容
  const chess = useMemo(() => {
    const chessStyle = { width: `${size - 15}px`, height: `${size - 15}px` }

    let temp = null
    if (type === chessType.red) {
      temp = <div className='red chess-item' style={ chessStyle }></div>
    } else if (type === chessType.black) {
      temp = <div className='black chess-item' style={ chessStyle }></div>
    }
    return temp
  }, [type, size])

  /**
   * 点击棋子
   */
  const handleClick = () => {
    if (type !== chessType.none) return
    // 点击了空白的，要做什么交给外部
    clickChess()
  }

  return (
    <div className='chess' onClick={ handleClick } style={{ width: `${size}px`, height: `${size}px` }}>
      { chess }
    </div>
  )
}

export default Index


