import Layout from './Layout/Layout.jsx' 
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './App.css'
import Login from './pages/Login.jsx'
import NotFound from './pages/NotFound.jsx'
import Header from './components/Header.jsx'
import Card from './components/Card.jsx'
import  NewPostsPage from './pages/NewPostPage.jsx'
import PostDetailsPage from './pages/PostDetailsPage.jsx'
import Dashboard from './pages/Dashboard.jsx'
import ThemeContextProvider from './context/ThemeContextProvider.jsx'

function App() {
  

  return (
    <>
    <ThemeContextProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/header' element={<Header/>}/> 
          <Route path='/home' element={<Layout/>}>
            <Route index  element={<Dashboard/>} />
            <Route path='newpost'  element={<NewPostsPage/>} />
            <Route  path='post/:id' element={<PostDetailsPage/>}/>
          </Route>
          {/* <Route path="/post/:id" element={<PostDetailsPage />} /> */}
          <Route path='/card' element={<Card/>}/>
          <Route path='*/*' element={<NotFound/>} />
        </Routes>
      </Router>
      </ThemeContextProvider>    
    </>
  )
}

export default App
