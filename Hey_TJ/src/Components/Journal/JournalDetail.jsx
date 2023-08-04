import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from "react"
import axios from "axios"


const JournalDetail = () => {

    const { journal_id } = useParams()
    console.log(journal_id)
    const [journalDetails, setJournalDetails] = useState(null)

    useEffect(() => {
        const getJournalDetails = async () => {
            const response = await axios.get(`http://127.0.0.1:8000/journals/${journal_id}`)
            console.log(response.data)
            setJournalDetails(response.data)
        }
        getJournalDetails()
        console.log()
    }, [journal_id])

  return (
    <div>
      
      {journalDetails ? (
        <div>
          <h2>{journalDetails.journal_name}</h2>
        </div>
      ) : (
        <div>No journals...</div>
      )}
      <Link to="/manage-journals">Back</Link>
    </div>
  )
}

export default JournalDetail

