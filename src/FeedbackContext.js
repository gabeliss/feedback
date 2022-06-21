import {createContext, useState} from 'react'
import { v4 as uuid } from 'uuid'

const FeedbackContext = createContext()

export function FeedbackProvider({children}) {

    const [feedback, setFeedback] = useState([])

    const [editedFeedback, setEditedFeedback] = useState({
        item: {},
        edit: false
    })

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

    const editFeedback = (item) => {
        setEditedFeedback({
            item,
            edit: true
        })
    }

    const updateFeedback = (id, updatedItem) => {
        setFeedback(
            feedback.map(item => (
                item.id === id ? {...item, ...updatedItem } : item
            ))
        )
        setEditedFeedback({
            item: {},
            edit: false,
        })
    }

    return (
        <FeedbackContext.Provider value={{feedback, editedFeedback, 
        addFeedback, deleteFeedback, editFeedback, updateFeedback}}>
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext



