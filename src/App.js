// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Slideshow from './components/slideshow';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Review from './components/Review';
import Products from './components/Products';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App()  {
return (
  
    <>
       <Router>
         <Header/>
         <Routes>
          <Route path='/' Component={Slideshow}></Route>
          <Route path='/products' Component={Products}></Route>
          <Route path='/review' Component={Review}></Route>
          <Route path='/contact' Component={Contact}></Route>
          
        </Routes>
          
         
         <Footer/>
       </Router>
    
  
    </>  

  );
 }

export default App;
