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
import Contact from './components/Contact';
import About from './components/About';
import Productdetails from './components/Productdetails';
function App() {
  return (
    <div >
      <Header/>
      <Contact/>
      <Productdetails/>
      
      <Routes>
      <Route path={'/'} element={<Herosection/>}  ></Route>
      <Route path={'/abt'} element={<About/>}  ></Route>
      <Route path={'/prod'} element={<Allproducts/>}  ></Route>
      <Route path={'/cont'} element={<Contact/>}  ></Route>
      </Routes>
      <Footer/>
    </div>
  );
}
export default App;
