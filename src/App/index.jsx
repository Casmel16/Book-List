import { useRoutes, BrowserRouter } from 'react-router-dom';
import './styles.css';
import Navbar from '../Components/Navbar';
import Home from '../Pages/Home';
import Template from '../Components/Template';
import { ChakraProvider } from '@chakra-ui/react';
const AppRoutes = () => useRoutes([
  {
    path: '/',
    element: <Home/>,
  },
]);
function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <Template>
          <AppRoutes/>
        </Template>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
