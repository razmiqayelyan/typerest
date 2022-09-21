import React from 'react'
import Posts from './features/posts/Posts'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import AboutPost from './features/posts/AboutPost';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={ <Posts/>}/>
          <Route path='/:id' element={<AboutPost/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App