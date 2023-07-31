import { Link } from 'react-router-dom'

const JournalList = () => {
    return (
        <div className='manage'>
            This is a list of all jornals
            <Link to="/new-journal">Make a New Journal</Link>
            <Link to="/journal-detail">Click a journal to get in depth deets</Link>
            {/* This will journal will need an axios call */}
        
        </div>
    )
}

export default JournalList