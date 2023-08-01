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
    <PublicNav />
    <div className='page'>
    {/* <GlobalProvider value={api}> */}
      <Main />
      {/* {userIsAuthenticated ? <AuthNav /> : <PublicNav />} */}
      {/* </GlobalProvider> */}
      
      </div>
      <Footer />
    </BrowserRouter>  
    </>
  )
}

export default App
