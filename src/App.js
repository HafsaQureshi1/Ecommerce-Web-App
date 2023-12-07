import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Herosection from './components/Herosection';
import  Footer  from './components/Footer';
import {Route, Routes } from 'react-router-dom';
import Bestselling from './components/Bestselling';
import Banner from './components/Banner';
function App() {
  return (
    <div >
      <Header/>
      <Herosection/>
      <Bestselling/>
      <Banner/>
      <Routes>
    
      </Routes>
      <Footer/>
    </div>
  );
}
export default App;
