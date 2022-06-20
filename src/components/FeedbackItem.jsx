import React from 'react'

function FeedbackItem({item}) {

  return (
    <div className='feedback-item'>
        <div>{item.starRating}</div>
        <div>{item.text}</div>
        <div>{item.num}</div>
    </div>
  )
}

export default FeedbackItem