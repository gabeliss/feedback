import React from 'react'
import { useContext } from 'react'
import FeedbackContext from '../FeedbackContext'

function FeedbackItem({item}) {

  const {deleteFeedback} = useContext(FeedbackContext)

  return (
    <div className='feedback-item'>
        <span className="delete" onClick={() => deleteFeedback(item.id)}>&#10006;</span>
        <div>{item.starRating}</div>
        <div>{item.text}</div>
    </div>
  )
}

export default FeedbackItem