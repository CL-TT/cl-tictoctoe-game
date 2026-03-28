/*
 * @Author: CL
 * @Date: 2026-03-27 22:40:48
 * @LastEditTime: 2026-03-28 09:44:11
 * @Description:
 */

// 棋子的类型
export enum chessType {
  none,
  red,
  black
}

// 棋子的尺寸
export enum chessSize {
  size80 = 80,
  size90 = 90,
  size100 = 100
}

/**
 * 游戏状态
 */
export enum gameStatus {
  gaming,
  redWin,
  blackWin,
  equal
}