import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Herosection from './components/Herosection';
import  Footer  from './components/Footer';
import {Route, Routes } from 'react-router-dom';
import Bestselling from './components/Bestselling';
import Banner from './components/Banner';
import ExploreProducts from './components/Exploreproducts';
import Newarrival from './components/Newarrival';
import Features from './components/Features';
import Allproducts from './components/Allproducts';
function App() {
  return (
    <div >
      <Header/>
      <Herosection/>
      <Bestselling/>
      <Banner/>
      <ExploreProducts/>
      <Newarrival/>
      <Features/>
      <Allproducts/>
      
      <Routes>
    
      </Routes>
      <Footer/>
    </div>
  );
}
export default App;
