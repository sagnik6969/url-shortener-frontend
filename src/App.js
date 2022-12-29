import React from 'react';
import './App.css';
// import Header from './components/Header'
import Header from './Header'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from './Container';

function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <Header/>
      <Container/>
    </div>
  );
}

export default App;
