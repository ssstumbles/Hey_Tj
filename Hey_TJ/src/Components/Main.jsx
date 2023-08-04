import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import AddJournal from '../Components/Journal/AddJournal'
import JournalList from '../Components/Journal/JournalList'
// import Journal from '../Componets/Journal/Journal'
import JournalDetail from '../Components/Journal/JournalDetail'
// import Contact from './Componets/Contact'
import UpdateEntry from './Entry/UpdateEntry'
import EntryDetail from './Entry/EntryDetail'


const Main = () => {

    return (
        <Routes>
            <Route exact path='/' element={ <Home /> } />
            <Route exact path='/about' element={ <About /> } />
            <Route path='/new-journal' element={ <AddJournal /> } />
            <Route path='/manage-journals' element={ <JournalList /> } />
            <Route path='/journals/:journal_id' element={ <JournalDetail /> } />
            {/* <Route path='/entries/' element= { <EntryList /> } /> */}
            <Route path='/entries/:entry_id' element={ <EntryDetail /> } />

        </Routes>
    )

}

export default Main