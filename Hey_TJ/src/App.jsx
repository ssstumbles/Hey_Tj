import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Main from './Components/Main'
import PublicNav from './Components/Nav/PublicNav'
import AuthNav from './Components/Nav/AuthNav'
import About from './Components/About'

import axios from 'axios'

const api = axios.create({
  baseURL: 'http://postgres://yootkaqj:k-HDt_Vm3hbwW-VCPYmBf7QsU3VH84Rz@hansken.db.elephantsql.com/yootkaqj'
})

function App() {

  return (
    <>
    <BrowserRouter>
      <PublicNav />
      <Main />
      {/* {userIsAuthenticated ? <AuthNav /> : <PublicNav />} */}

    </BrowserRouter>  
    </>
  )
}

export default App
