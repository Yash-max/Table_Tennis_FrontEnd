import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Splash from './pages/Splash';
import Signup from './pages/Signup';
import Login from './pages/Login.';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Splash />} />
        <Route exact path='/signup' element={<Signup />} />
        <Route exact path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;