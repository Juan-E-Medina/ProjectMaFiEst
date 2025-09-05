import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Sidebar />
        <main>
          <AppRoutes />
        </main>
      </div>
    </Router>
  );
};

export default App;