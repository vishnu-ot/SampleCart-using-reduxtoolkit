import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/Header'
import ProductGallary from './components/ProductGallary/ProductGallary'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <ProductGallary/>
    </>
  )
}

export default App
