import React from 'react';
import {GlobalStyle} from './GlobalStyle';
import Header from './components/Header';
import Home from './components/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Movie from './components/Movie';
import NotFound from './components/NotFound';
import CommentSection from './components/CommnetSection';

const App = () => (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/:movieId" element={<Movie/>} />
        <Route path='/*' element={<NotFound />} />
        <Route path='/comment' element = {<CommentSection/>} />
      </Routes>
      <GlobalStyle />
    </Router>
)

export default App;
