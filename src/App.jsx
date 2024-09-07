import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Route, Routes} from "react-router-dom"
import BoardList from './routes/BoardList'
import Home from './routes/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/board" element={<BoardList/>}/>
    </Routes>
    
      <div>
        메인페이지 입니다.
      </div>
      <h1>헤드라인</h1>
      <div className="card">
        2번
      </div>
      <p className="read-the-docs">
        표시줄
      </p>
    </>
  )
}

export default App
