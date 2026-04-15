
import { HashRouter } from 'react-router-dom';
import { AppRoutes } from './router';
import { CartProvider } from './contexts/CartContext';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <CartProvider>
        <AppRoutes />
      </CartProvider>
    </HashRouter>
  );
}

export default App;