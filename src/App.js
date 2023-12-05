import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Herosection from './components/Herosection';
import  Footer  from './components/Footer';
import {Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div >
      <Header/>
      <Herosection/>

      <Routes>
    
      </Routes>
      <Footer/>
    </div>
  );
}
export default App;
