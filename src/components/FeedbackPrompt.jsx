import React from 'react'
import Stars from './Stars'
import StaticStars from './StaticStars'
import { useState } from 'react'
import { useContext } from 'react'
import FeedbackContext from '../FeedbackContext'

function FeedbackPrompt() {

  const [starRating, setStarRating] = useState('0')

  const [text, setText] = useState('')

  const handleText = (e) => {
    setText(e.target.value)
  }

  const {addFeedback} = useContext(FeedbackContext)

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
        starRating: <StaticStars selected={starRating}/>,
        text: text,
        num: starRating
      }
      addFeedback(newFeedback)
      document.getElementById('form').reset()
      setText('')
      setStarRating(0)
    }
  }

  return (
    <div className='feedback-prompt'>
        <h1 style={{fontSize: 20}}>Select a rating out of 5 stars</h1>
        <Stars select={setStarRating} selected={starRating}/>
        <form onSubmit={handleSubmit} id='form'>
          <input onChange={handleText} type='text' id='user-input' name='user-input' placeholder='Give Feedback'></input>
          <input type="submit" id='submit-button' value='Send' />
        </form>
    </div>
  )
}

export default FeedbackPrompt