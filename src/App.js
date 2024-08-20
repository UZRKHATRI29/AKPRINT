import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductsPage from './pages/ProductsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';


function App() {
  return (
  <Router>
    <div className="app">
      <Header/>
      <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element = {<ProductsPage/>} />
        <Route path="/about" element = {<AboutPage/>} />
        <Route path='/contact'element = {<ContactPage/>} />
      </Routes>
      </main>
      <Footer/>        
    </div>
   </Router>


  );
}
;
export default App;
