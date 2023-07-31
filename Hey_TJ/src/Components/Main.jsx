import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import AddJournal from '../Components/Journal/AddJournal'
import JournalList from '../Components/Journal/JournalList'
// import Journal from '../Componets/Journal/Journal'
import JournalDetail from '../Components/Journal/JournalDetail'
// import Contact from './Componets/Contact'
import AddEntry from '../Components/Entry/AddEntry'


const Main = () => {

    return (
        <Routes>
            <Route exact path='/' element={ <Home /> } />
            <Route exact path='/about' element={ <About /> } />
            <Route path='/new-journal' element={ <AddJournal /> } />
            <Route path='/manage-journals' element={ <JournalList /> } />
            <Route path='/journal-detail' element={ <JournalDetail /> } />
            {/* <Route path='/journal' element={ <Journal /> } />  */}
            {/* <Route path='/contact' element={ <Contact /> } /> */}
            <Route path='new-entry' element={ <AddEntry /> } />

        </Routes>
    )

}

export default Main