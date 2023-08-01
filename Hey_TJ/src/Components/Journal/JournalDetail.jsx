import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from "react"
import axios from "axios"


const JournalDetail = () => {

    const { journal_id } = useParams()
    const [journalDetails, setJournalDetails] = useState=(null)

    useEffect(() => {
        const getJournalDetails = async () => {
            const response = await axios.get('http://127.0.0.1:8000/journal-details/')
            setJournalDetails(response.data)
        }
        getJournalDetails()
    }, [journal_id])

  return (
    <div>
      <Link to="/manage-journals">Back</Link>
      {journalDetails ? (
        <div>
          <h2>{journalDetails.journal_name}</h2>
          {/* Display other details of the journal here */}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default JournalDetail