import logo from './logo.svg';
import './App.css';
import Gallery from './components/gallery';

const images = [
  {
    original: '',
    thumbnail: ''
  }
]


function App() {
  return (
    <div className="App">
      <Gallery items={images} />
    </div>
  );
}

export default App;
