import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductsContainer from "./modules/ProductsContainer"
import NavBar from "./components/NavBar"
import ProductDetailContainer from './modules/ProductDetailContainer'
import HomeContainer from './components/HomeContainer'
import CartContextProvider from './contexts/CartContext';
import CheckoutContainer from './modules/CheckoutContainer'

const App = () => {
  const messageGreeting = "Bienvenidos"

  return (<CartContextProvider>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomeContainer greeting={messageGreeting} />} />
        <Route path='products' element={<ProductsContainer />} />
        <Route path='category/:categoryId' element={<ProductsContainer />} />
        <Route path='category' element={<ProductsContainer />} />
        <Route path='details/:productId' element={<ProductDetailContainer />} />
        <Route path='checkout' element={<CheckoutContainer />} />
      </Routes>
    </BrowserRouter>
  </CartContextProvider>
  )
}

export default App
