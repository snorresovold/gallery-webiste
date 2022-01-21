import logo from './logo.svg';
import './App.css';
import AwesomeSlider from 'react-awesome-slider';
import styles from "./styles.scss"



function App() {
  return (
    <div className="App">
      <h1>Gallery</h1>

      <div>
        <h3>AI generte bilder</h3>
        <AwesomeSlider cssModule={styles}>
          <div data-src="/assets/ai/sus.png" />
        </AwesomeSlider>
      </div>
    </div>
  );
}

export default App;
