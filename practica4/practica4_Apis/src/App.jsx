import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [user, setUsers] = []
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/")
          .then(res => res.json())
          .then(data => setUsers(data))
      setUsers(data)
    })
  return (
    <>


    </>
  )
}

export default App
