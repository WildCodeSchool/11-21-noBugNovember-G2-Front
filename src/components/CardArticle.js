import React from 'react'
import './styles/CardArticle.css'

export default function CardArticle(props) {
  const { card } = props
  return (
    <>
      <div className='item'>
        <div>
          <p>{card.member}</p>
        </div>
      </div>
    </>
  )
}
