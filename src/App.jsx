import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import ConversifyPage from './Pages/ConversifyPage';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ConversifyPage" element={<ConversifyPage />} />
        </Routes>
      </BrowserRouter>
      
      <Footer />
    </>
  );
}

export default App;
