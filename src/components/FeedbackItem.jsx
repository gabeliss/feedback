import React from 'react'
import { useContext } from 'react'
import FeedbackContext from '../FeedbackContext'

function FeedbackItem({item}) {

  const {deleteFeedback, editFeedback} = useContext(FeedbackContext)

  return (
    <div className='feedback-item'>
        <div className='editdelete'>
        <button className="edit" onClick={() => editFeedback(item)}>Edit</button>
        <span className="delete" onClick={() => deleteFeedback(item.id)}>&#10006;</span>
        </div>
        <div>{item.starRating}</div>
        <div>{item.text}</div>
    </div>
  )
}

export default FeedbackItem