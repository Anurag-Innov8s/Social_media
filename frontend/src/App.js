import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Header from "./Components/Header/Header"
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { loadUser } from './Actions/User';
function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(loadUser());
  },[dispatch]);
  const { isAuthenticated } = useSelector((state) => state.user);
  
  console.log(isAuthenticated)
  return (
    <Router>
    {isAuthenticated && <Header />}
      <Routes>
        <Route path ="/" element= {isAuthenticated ? <Home/> : <Login />} />
        {/* <Route path = "/home" element={<Header />}></Route> */}
      </Routes>
    </Router>
  );
}

export default App;
