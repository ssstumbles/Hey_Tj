import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'

const Main = () => {

    return (
        <Routes>
            <Route exact path='/' element={ <Home /> } />
            <Route exact path='/about' element={ <About /> } />
            
            {/* <Route exact path='/new-journal' element={ <AddJournal /> } /> */}
        </Routes>
    )

}

export default Main