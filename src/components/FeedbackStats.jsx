import React from 'react'
import FeedbackContext from '../FeedbackContext'
import { useContext } from 'react'

function FeedbackStats() {

  const {feedback} = useContext(FeedbackContext)

  const numReviews = feedback.length

  if (numReviews === 0) {
    return
  }
  else {
    var total = 0
    feedback.forEach(item => {
        total += item.num
    })
    const average = total / numReviews

  return (
    <div className='feedback-stats'>
        <p># of Reviews: {numReviews}</p>
        <p>Average Rating: {average} / 5</p>
    </div>
  )
  }
}

export default FeedbackStats