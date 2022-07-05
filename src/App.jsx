import { Routes, Route } from 'react-router-dom'
import './App.css'
import Landing from './components/landing/landing'
import NavBar from './components/navbar/navbar'


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element ={<Landing/>} />
        <Route path="/portfolio/:lan" element = {<NavBar/>} />
      </Routes>
    </div>
  )
}

export default App
