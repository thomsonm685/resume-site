import './App.css';
import Intro from './components/Intro';
import WhoIAm from './components/WhoIAm';


import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Index from './pages/Index';
import Blogs from './pages/Blogs';

import BlogPost from './components/BlogPost';


function App() {
  return (
    <div className="App">
    <Router>
    <Routes>
        <Route exact path='/' element={<Index/>} />
        <Route exact path='/blogs' element={<Blogs/>} />
        <Route path='blogs/:id' element={<BlogPost/>} />

    </Routes>
    </Router>

    </div>
  );
}

export default App;
