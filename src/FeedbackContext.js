import {createContext, useState} from 'react'
import { v4 as uuid } from 'uuid'

const FeedbackContext = createContext()

export function FeedbackProvider({children}) {

    const [feedback, setFeedback] = useState([])

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuid()
        newFeedback.key = newFeedback.id
        setFeedback([newFeedback, ...feedback])
    }

    const deleteFeedback = (id) => {
        setFeedback(
            feedback.filter((item) => item.id !== id)
        )
    }

    return (
        <FeedbackContext.Provider value={{feedback, addFeedback, deleteFeedback}}>
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext



