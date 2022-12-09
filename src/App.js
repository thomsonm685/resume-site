import './App.css';
import Intro from './components/Intro';
import WhoIAm from './components/WhoIAm';

function App() {
  return (
    <div className="App">
      <Intro/>
      <div className='main-site'>
        <WhoIAm/>
      </div>

    </div>
  );
}

export default App;
