import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from "react"
import axios from "axios"


const JournalDetail = () => {

  const { journal_id } = useParams()
  const [journalDetails, setJournalDetails] = useState(null)
  const [entries, setEntries] = useState([])

  useEffect(() => {
    const getJournalDetails = async () => {
      const response = await axios.get(`http://127.0.0.1:8000/journals/${journal_id}`)
      console.log(response.data)
      setJournalDetails(response.data)
    }

    const getJournalEntries = async () => {
      const response = await axios.get(`http://127.0.0.1:8000/entries/?journal=${journal_id}`)
      console.log(response.data)
      setEntries(response.data)
    }

    getJournalDetails()
    getJournalEntries()
    console.log()
  }, [journal_id])

  return (
    <div>

      {journalDetails ? (
        <div>
          <h2>{journalDetails.journal_name}</h2>
          <p>{journalDetails.start_date}</p>
          <p>{journalDetails.end_date}</p>
          <h3>Entries</h3>
          {entries.length > 0 ? (
            <ul>
              {entries.map((entry) => (
                <li key={entry.name}>
                  <Link to={`/entries/${entry.id}`}>{entry.name}</Link>
                </li>
              ))}
            </ul>
          ) : (
            <div>No entries for this journal...</div>
          )}
        </div>
      ) : (
        <div>No journals...</div>
      )}
      <Link to="/manage-journals">Back</Link>
    </div>
  )
}

export default JournalDetail

