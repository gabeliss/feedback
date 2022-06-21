import React from 'react'
import Stars from './Stars'
import StaticStars from './StaticStars'
import { useState } from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import FeedbackContext from '../FeedbackContext'

function FeedbackPrompt() {

  const [starRating, setStarRating] = useState('0')

  const [text, setText] = useState('')

  const [submitText, setSubmitText] = useState('Send')

  const handleText = (e) => {
    setText(e.target.value)
  }

  const {addFeedback, editedFeedback, updateFeedback} = useContext(FeedbackContext)

  useEffect(() => {
    if (editedFeedback.edit === true) {
      setText(editedFeedback.item.text)
      setSubmitText('Finish Editing')
    }
  }, [editedFeedback])

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
      if (editedFeedback.edit === true) {
        updateFeedback(editedFeedback.item.id, newFeedback)
      }
      else {
        addFeedback(newFeedback)
      }
      document.getElementById('form').reset()
      setText('')
      setStarRating(0)
      setSubmitText('Send')
    }
  }

  return (
    <div className='feedback-prompt'>
        <h1 style={{fontSize: 20}}>Select a rating out of 5 stars</h1>
        <Stars select={setStarRating} selected={starRating}/>
        <form onSubmit={handleSubmit} id='form'>
          <input onChange={handleText} type='text' value={text} id='user-input' name='user-input' placeholder='Give Feedback'></input>
          <input type="submit" id='submit-button' value={submitText} />
        </form>
    </div>
  )
}

export default FeedbackPrompt