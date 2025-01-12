import { useState,lazy, Suspense } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes, useNavigate, } from 'react-router-dom'
const Dashboard= lazy(()=> import("./components/Dashboard"))
const Landing = lazy(()=>import("./components/Landing"))

function App() {

  return (
    <>
    
     <BrowserRouter>
     <Appbar/>
     <Suspense fallback={<div>Loading ..</div>}>
     <Routes>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/' element={<Landing/>}/>
     </Routes>
     </Suspense>
     
     </BrowserRouter>
    </>
  )
}

function Appbar(){
  
  const navigate= useNavigate();
  return (
    <>
    <div>

<button onClick={()=>{
  navigate("/")
}}>Landing Page</button>
<button onClick={()=>{
navigate("/dashboard")      }}>Dashboard</button>
</div></>
  )
  


}

export default App
