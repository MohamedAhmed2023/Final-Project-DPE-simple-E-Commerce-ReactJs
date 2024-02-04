import NavBar from './Components/NavBar/NavBar';
import Silder from './Components/Silder/Silder';
import ProductsList from './Components/Products/ProductsList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './Components/About/About';
import ProductDit from './Components/ProductDit';
import AllProducts from './Components/Products/AllProducts';
import { useEffect } from 'react';
import Footer from './Components/Footer/Footer';

function App() {
  useEffect(() => {

  })
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/" element={<>
            <NavBar />
            <Silder />
            <ProductsList />
          </>} />
          <Route path='about' element={<About />} />
          <Route path='product/:productId' element={<ProductDit />}></Route>
          <Route path='AllProducts' element={<AllProducts />}></Route>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App; 
