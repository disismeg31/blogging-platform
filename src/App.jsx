import Layout from './Layout/Layout.jsx' 
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './App.css'
import Login from './pages/Login.jsx'
import NotFound from './pages/NotFound.jsx'
import Header from './components/Header.jsx'
import Card from './components/Card.jsx'
import HomePage from './pages/HomePage.jsx'
import PostDetailsPage from './pages/PostDetailsPage.jsx'

function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/header' element={<Header/>}/> 
          <Route path='/home' element={<Layout/>}/>
          <Route path='/h' element={<HomePage/>} />
          <Route path="/post/:id" element={<PostDetailsPage />} />
          <Route path='/card' element={<Card/>}/>
          <Route path='**' element={<NotFound/>} />
        </Routes>
      </Router>
        
    </>
  )
}

export default App
