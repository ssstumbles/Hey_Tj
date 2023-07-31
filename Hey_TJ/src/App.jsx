import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Main from './Components/Main'
import PublicNav from './Components/Nav/PublicNav'
// import AuthNav from './Components/Nav/AuthNav'
// import About from './Components/About'
import Footer from './Components/Footer'
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
      <Footer />
    </BrowserRouter>  
    </>
  )
}

export default App
