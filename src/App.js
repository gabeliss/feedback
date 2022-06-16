import Header from './components/Header'
import FeedbackPrompt from './components/FeedbackPrompt';

function App() {
  return (
    <>
      <Header />
      <div className='outer-container'>
        <FeedbackPrompt />
      </div>
    </>
  );
}

export default App;
