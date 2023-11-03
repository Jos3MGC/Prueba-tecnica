import React from 'react'
import Navbar from '../components/Navbar'
import TrelloBoard from '../components/TelloBoard'

const Board = ({ onClickLogOut }: any) => {
  return (
    <div className='container'>
      <Navbar onClickLogOut={onClickLogOut} />
      <TrelloBoard />
    </div>
  )
}

export default Board