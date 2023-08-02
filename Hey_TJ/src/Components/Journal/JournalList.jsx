import { Link } from 'react-router-dom'
import { useEffect, useState } from "react"
import axios from "axios"

const JournalList = () => {

const [allJournals, setAllJournals] = useState([])

useEffect(() => {
    const getAllJournals = async () => {
        const response = await axios.get('http://127.0.0.1:8000/journals/')
        console.log(response)
        setAllJournals(response.data)
        console.log(response.data)
    }
        getAllJournals()
    }, [])

    return (
        <div className='manage'>
        
            {allJournals.map((journal, key) => (
                <li key={journal.journal_id}>
                    <Link to={`/entries/${journal.id}`}>{journal.journal_name}</Link>
                </li>
            ))}
        

            <Link to="/new-journal">Make a New Journal</Link>
            {/* <Link to="/journal-detail">Click a journal to get in depth deets</Link> */}
            {/* This  will need an axios call */}
        
        </div>
    )
}

export default JournalList