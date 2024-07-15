import './assets/App.css';
import NavBar from './components/NavBar';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route index='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
