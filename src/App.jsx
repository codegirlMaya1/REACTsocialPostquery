import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostsList from './components/PostsList';
import NewPostForm from './components/NewPostForm';
import AppNavbar from './components/Navbar';
import About from './components/About';

const App = () => {
  return (
    <Router>
      <AppNavbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<PostsList />} />
          <Route path="/create" element={<NewPostForm />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

