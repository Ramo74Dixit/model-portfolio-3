import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import Profile from './components/Profile'
import Gallery from './components/Gallery'
import Booking from './components/Booking'
import Login from './components/Login'
import Footer from './components/Footer'
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
