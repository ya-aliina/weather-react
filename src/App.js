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
      <div className="copyright">
        <a href="https://github.com/freshgoldroses/weather-app">GitHub</a>
        <span> | Alina Makovii</span>
      </div>
    </div>
  );
}

export default App;
