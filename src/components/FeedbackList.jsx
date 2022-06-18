import React from 'react'
import FeedbackItem from './FeedbackItem'
import FeedbackContext from '../FeedbackContext'
import { useContext } from 'react'

function FeedbackList() {

  const [feedback] = useContext(FeedbackContext)

  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>
  }

  return (
    <div className='feedback-list'>
        {feedback.map(item => (
          <FeedbackItem key='1' item={item} />
        ))}
    </div>
  )
}

export default FeedbackList