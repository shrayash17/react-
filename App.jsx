import { useState , useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [todos,setTodos]=useState([])

  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>{
      setTodos(res.data)
    })


  },[])


  return (
    <>
      {todos.map(td=> <Todo {...td}/>)}
    </>
  )
}

function Todo({userId, id, title, body}){
  return(
    <>
    <h1>User ID: {userId}</h1>
    <h2>ID: {id}</h2>
    <h3>Title: {title}</h3>
    <p>{body}</p>
    
    </>
  )
}

export default App
