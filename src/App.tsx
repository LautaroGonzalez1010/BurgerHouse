
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './router';
import { CartProvider } from './contexts/CartContext';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <BrowserRouter basename={__BASE_PATH__}>
      <ScrollToTop />
      <CartProvider>
        <AppRoutes />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
