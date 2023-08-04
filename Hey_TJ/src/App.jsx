import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Main from './Components/Main'
import PublicNav from './Components/Nav/PublicNav'
import Footer from './Components/Footer'


function App() {

  return (
    <>
      <BrowserRouter>
        <PublicNav />
        <div className='page'>
          <Main />
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
