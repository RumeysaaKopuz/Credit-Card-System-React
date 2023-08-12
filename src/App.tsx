import React from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Cards from './CardManager/Cards/Cards';
import AddCard from './CardManager/AddCard/AddCard';
import EditCard from './CardManager/EditCard/EditCard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
   
        <Routes>
         
          <Route path="/add-card" element={<AddCard />} />
       
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
