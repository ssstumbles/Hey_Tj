import { Link } from 'react-router-dom'
import { useEffect, useState } from "react"
import axios from "axios"

const JournalList = () => {


const [allJournals, setAllJournals] = useState()

useEffect(() => {
    const getAllJournals = async () => {
        const response = await axios.get('http://postgres://yootkaqj:k-HDt_Vm3hbwW-VCPYmBf7QsU3VH84Rz@hansken.db.elephantsql.com/yootkaqj/journal/')
        setAllJournals(response.data)
    }
        getAllJournals
    }, [])
    
    return (
        <div className='manage'>
            {allJournals}
            This is a list of all jornals
            <Link to="/new-journal">Make a New Journal</Link>
            <Link to="/journal-detail">Click a journal to get in depth deets</Link>
            {/* This  will need an axios call */}
        
        </div>
    )
}

export default JournalList