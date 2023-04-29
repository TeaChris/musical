import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/home/Home'
import Chart from './pages/chart/Chart'
import Collection from './pages/collection/Collection'
import Radio from './pages/radio/Radio'
import Profile from './pages/radio/Radio'
import Log from './pages/log/LogIn'
import Error from './pages/error/Error'

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chart" element={<Chart />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/radio" element={<Radio />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/log" element={<Log />} />
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
