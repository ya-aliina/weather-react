import './App.css';
import LeftPannel from './js/LeftPannel';
import RightPannel from './js/RightPannel';

function App() {
  return (
    <div className="App">
      <div className="weather-box">
        <LeftPannel />
        <RightPannel />
      </div>
    </div>
  );
}

export default App;
