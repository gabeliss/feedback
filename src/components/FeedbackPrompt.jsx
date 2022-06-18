import React from 'react'
import Stars from './Stars'
import { useState } from 'react'

function FeedbackPrompt({handleAddFeedback}) {

  const [starRating, setStarRating] = useState('0')
  
  const handleStarClick = (value) => {
    setStarRating(value)
  }

  const [text, setText] = useState('')

  const handleText = (e) => {
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (text === '') {
      alert('Message must not be empty')
    } 
    else if (starRating === 0) {
      alert('Must pick a star rating out of 5')
    }
    else {
      const newFeedback = {
        starRating: starRating,
        text: text
      }
  
      handleAddFeedback(newFeedback)
      document.getElementById('form').reset()
      document.querySelector('input[name="rate"]:checked').checked = false
      setText('')
      setStarRating(0)
    }
  }

  return (
    <div className='feedback-prompt'>
        <h1 style={{fontSize: 20}}>Select a rating out of 5 stars</h1>
        <Stars handleStarClick={handleStarClick}/>
        <form onSubmit={handleSubmit} id='form'>
          <input onChange={handleText} type='text' id='user-input' name='user-input' placeholder='Give Feedback'></input>
          <input type="submit" id='submit-button' value='Send' />
        </form>
    </div>
  )
}

export default FeedbackPrompt