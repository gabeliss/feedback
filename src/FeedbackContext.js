import {createContext, useState} from 'react'

const FeedbackContext = createContext()

export function FeedbackProvider({children}) {

    const [feedback, setFeedback] = useState([])

    const addFeedback = (newFeedback) => {
        setFeedback([newFeedback, ...feedback])
    }

    return (
        <FeedbackContext.Provider value={{feedback, addFeedback}}>
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext



