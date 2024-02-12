import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemListContainer from "./modules/ItemListContainer"
import NavBar from "./components/NavBar"
import ItemDetailContainer from './modules/ItemDetailContainer'
import HomeContainer from './modules/HomeContainer'
import CartContextProvider from './contexts/CartContext';
import CheckoutContainer from './modules/CheckoutContainer'

const App = () => {
  const messageGreeting = "Skinceuticals"

  return (<CartContextProvider>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomeContainer greeting={messageGreeting} />} />
        <Route path='products' element={<ItemListContainer />} />
        <Route path='category/:categoryId' element={<ItemListContainer />} />
        <Route path='category' element={<ItemListContainer />} />
        <Route path='details/:productId' element={<ItemDetailContainer />} />
        <Route path='checkout' element={<CheckoutContainer />} />
      </Routes>
    </BrowserRouter>
  </CartContextProvider>
  )
}

export default App
