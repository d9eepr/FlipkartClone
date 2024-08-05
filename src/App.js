import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, NotFound } from './components/default';
import { Box } from '@mui/material'

//components
// import Header from './Components/Header/Header';
import NHeader from './components/Header/Header';
import DetailView from './components/ItemDetails/DetailView';
import TemplateProvider from './template/TemplateProvider';
import ContextProvider from './context/ContextProvider';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <TemplateProvider>
      <ContextProvider>
        <BrowserRouter>
          <NHeader />
          <Box style={{marginTop: 54}}>
            <Routes>
              <Route path= '/' element={<Home />} />
              <Route path= '/cart' element={<Cart />} />
              <Route path= '/product/:id' element={<DetailView />} />
            </Routes>
          </Box>
        </BrowserRouter>
      </ContextProvider>
    </TemplateProvider>
  );
}

export default App;