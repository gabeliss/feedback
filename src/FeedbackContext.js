import {createContext, useState} from 'react'

const FeedbackContext = createContext()

export function FeedbackProvider({children}) {

    const [feedback, setFeedback] = useState(['hi'])

    return (
        <FeedbackContext.Provider value={[feedback]}>
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext



