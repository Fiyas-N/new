import './App.css'
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom'
import About from './pages/About'
import Cast from './pages/Cast'
import Rating from './pages/Rating'
import Home from './pages/Home'
function App() {
  return (
    <>
      <BrowserRouter>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/cast">Cast</Link></li>
          <li><Link to="/rating">Rating</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/cast" element={<Cast/>}/>
        <Route path="/rating" element={<Rating/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App