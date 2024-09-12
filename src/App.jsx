import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs'
import Appointment from './Pages/Appointment';
import Login from './Pages/Login'
import Register from './Pages/Register'
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element = { <Home /> } />
          <Route path='/about-us' element = { <AboutUs /> } />
          <Route path='/appointment' element = { <Appointment /> } />
          <Route path='/login' element = { <Login /> } />
          <Route path='/register' element = { <Register /> } />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
