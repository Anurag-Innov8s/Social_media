import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Header from "./Components/Header/Header"
import Login from './Components/Login/Login';
function App() {
  return (
    <Router>
      <Routes>
        <Route path ="/" element={<Login />} />
        <Route path = "/home" element={<Header />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
