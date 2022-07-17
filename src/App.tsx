import React from 'react';
import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";

import Product from './Pages/Product/Product';

const App: React.FC = () => {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Product />} />
    </Routes>
    </div>
  );
}

export default App;
