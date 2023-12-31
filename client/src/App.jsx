import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import IndexPage from './pages/IndexPage'
import LoginPage from './pages/LoginPage'
import Layout from './Layout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<IndexPage />} />
          <Route path='/login' element={<LoginPage />} />
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
