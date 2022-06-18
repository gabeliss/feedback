import Header from './components/Header'
import FeedbackPrompt from './components/FeedbackPrompt';
import FeedbackList from './components/FeedbackList';
import { FeedbackProvider } from './FeedbackContext';

function App() {

  const addFeedback = ({newFeedback}) => {
    console.log(newFeedback)
  }

  return (
    <FeedbackProvider>
      <>
        <Header />
        <div className='outer-container'>
          <FeedbackPrompt handleAddFeedback={addFeedback}/>
          <FeedbackList/>
        </div>
      </>
    </FeedbackProvider>
  );
}

export default App;
