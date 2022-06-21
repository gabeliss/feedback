import Header from './components/Header'
import FeedbackPrompt from './components/FeedbackPrompt';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
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
          <FeedbackStats />
          <FeedbackList/>
        </div>
      </>
    </FeedbackProvider>
  );
}

export default App;
