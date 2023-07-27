import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PublicNav from './Components/PublicNav'
import PrivateNav from './Components/AuthNav'

function Nav() {
  const userIsAuthenticated = false

  return (
    <>
        <Nav />
    </>
  )
}

export default Nav
