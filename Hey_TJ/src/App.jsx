import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Main from './Components/Main'
import PublicNav from './Components/Nav/PublicNav'
import AuthNav from './Components/Nav/AuthNav'
import About from './Components/About'
import ApiContext from './context'

function App() {

  return (
    <>
    <BrowserRouter>
    <ApiContext.Provier>
      <PublicNav />
      <Main />
      {/* {userIsAuthenticated ? <AuthNav /> : <PublicNav />} */}
      </ApiContext.Provier>
    </BrowserRouter>  
    </>
  )
}

export default App
