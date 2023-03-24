import logo from './logo.svg';
import './App.scss';
import { Home, CategoryProduct, ProductSingle, Cart, Search } from './pages/index'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import { Provider } from 'react-redux';
import store from './store/store';
import Footer from './components/Footer/Footer';
import ChatWidget from './components/ChatWidget/ChatWidget';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Sidebar />
          <ChatWidget />
          <Routes>
            {/*home page route*/}
            <Route path="/" element={<Home />} />
            {/*single product route*/}
            <Route path="/product/:id" element={<ProductSingle />} />
            {/*category wise product listing route*/}
            <Route path="/category/:category" element={<CategoryProduct />} />
            {/* cart */}
            <Route path='/cart' element={<Cart />} />
            {/* searched products */}
            <Route path='/search/:searchTerm' element={<Search />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
