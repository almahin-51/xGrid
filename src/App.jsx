import { Outlet } from 'react-router-dom'
import './App.css'
import { Navbar } from './Components/Home/Header/Navbar'
import { Banner } from './Components/Home/Banner/Banner'
import { Features } from './Components/Home/Features/Features'

function App() {

  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>
    <Features></Features>
    <Outlet></Outlet>
    </>
  )
}

export default App
