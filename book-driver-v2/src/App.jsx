import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";
import Login from './pages/Login.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={<NotFound/>}/>
        <Route path='/login/:loginParam' element={<Login />}/>
      </Routes>
    </Router>
  )
}

export default App
