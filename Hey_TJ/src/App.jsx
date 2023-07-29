import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Main from './Components/Main'
import PublicNav from './Components/Nav/PublicNav'
import AuthNav from './Components/Nav/AuthNav'
import About from './Components/About'
// import { Global } from './Context'

function App() {

  return (
    <>
    <BrowserRouter>
    {/* <GlobalProvider value={api}> */}
      <PublicNav />
      <Main />
      {/* {userIsAuthenticated ? <AuthNav /> : <PublicNav />} */}
      {/* </GlobalProvider> */}
    </BrowserRouter>  
    </>
  )
}

export default App
