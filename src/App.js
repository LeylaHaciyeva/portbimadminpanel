// import logo from './logo.svg';
// import './App.css';
// import About from './pages/About';
// import Content from './components/Content';
// import Register from './pages/Register';
// import { Route, Routes } from 'react-router-dom';
// import Login from './pages/Login';
// import Home from './pages/Home';

// function App() {

//   return (
//     // <div >
//     //   <Register/>
//     //  {/* <About/> */}
//     //  {/* <Content language="en"/> */}
//     // </div>
//     <>
//     <Routes>
//       <Route path='/' element={<Home />} />
//       <Route path='/login' element={<Login />} />
//       <Route path='/register' element={<Register />} />
//       <Route path='/about' element={<About />} />
//     </Routes>
//     </>
//   );
// }

// export default App;



import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import AdminDashboard from './pages/AdminDashboard';
import Login from './pages/Login.js';
// import Home from './pages/Home.js';
import './App.css'
const App = () => {
    return (
        <Routes>
                <Route path="/login" element={<Login/>} />
                <Route path="/admin" element={<AdminDashboard/>} />
        </Routes>
    );
};

export default App;
