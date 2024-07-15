import './assets/App.css';
import NavBar from './components/NavBar';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home';
import Products from './pages/products/Products'
import Pricing from './pages/pricing/Pricing'
import BookADemo from './pages/bookademo/BookADemo'
import AboutUs from './pages/About/About'
import ContactUs from './pages/Contact/Contact'

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route index='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/bookADemo' element={<BookADemo />} />
        <Route path='/aboutUs' element={<AboutUs />} />
        <Route path='/contactUs' element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
