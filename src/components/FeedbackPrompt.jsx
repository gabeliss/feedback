import React from 'react'
import Stars from './Stars'

function FeedbackPrompt() {

    const handleStarClick = (value) => {
      console.log(value)
    }

  return (
    <div className='feedback-prompt'>
        <h1 style={{fontSize: 20}}>Select a rating out of 5 stars</h1>
        <Stars handleStarClick={handleStarClick}/>
        
    </div>
  )
}

export default FeedbackPrompt