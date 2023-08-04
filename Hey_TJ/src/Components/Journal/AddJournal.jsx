import { Link } from 'react-router-dom'
import { useState, useContext, useEffect } from 'react'
import  Calendar from 'react-calendar'
import axios from 'axios'

const AddJournal = () => {
    
    const [journals, setJournals] = useState([])


    const initialState = {
        "journal_id": '',
        "journal_name": '',
        "journal_date_start": new Date(),
        "journal_ongoing": false,
        "journal_date_end": '',
        // "journal_locations": '',
    }
    
    const [formState, setFormState] = useState(initialState)

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.id]: e.target.value })
    }

    const handleOngoingChange = (e) => {
        setFormState({ ...formState, journal_ongoing: e.target.checked })
    }
        //remember this vast fuckery for later
        const formatDate = (dateStr) => {
            const date = new Date(dateStr)
            const year = date.getFullYear()
            const month = String(date.getMonth() + 1).padStart(2, "0")
            const day = String(date.getDate()).padStart(2, "0")
            return `${year}-${month}-${day}`
          }

        //   const lastJournalId = journals.length > 0 ? journals[journals.length - 1].journal_id : 0
        //   setFormState({ ...formState, journal_id: lastJournalId + 1 })

        
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(formState)

        await axios.post('http://127.0.0.1:8000/journals/', formState)
             .then((response) => {
                console.log(response)
       
      })
      .catch((error) => {
        console.error('Error creating journal:', error);
      })
    }

    const handleCalendarChange = (date) => {
        const formattedDate = formatDate(date)
        setFormState({ ...formState, journal_date_start: (formattedDate) })
    }

        return (
            <div className='add-journal'>
                <form onSubmit={handleSubmit}>
                    <div>Name your journal</div>
                    <input
                        type='text'
                        id='journal_name'
                        value={formState.journal_name}
                        onChange={handleChange}
                    />

                    <div>Start date: </div>
                    <input
                        type='date'
                        id='journal_date_start'
                        value={formState.journal_date_start}
                        onChange={handleOngoingChange}
                    />

                    <div>Is your trip still happening? </div>
                    <input
                        type='checkbox'
                        id='journal_ongoing'
                        checked={formState.journal_ongoing}
                        onChange={handleOngoingChange}
                    />

                    {formState.journal_ongoing ? null : (
                        <div>
                            <div>End date</div>
                            <input
                                type='date'
                                id='journal_date_end'
                                value={formState.journal_date_end}
                                onChange={handleChange}
                            />
                        </div>
                    )}
                    <div className='calendar'>
                        <Calendar
                            onChange={handleCalendarChange}
                            showNavigation = {false}
                        />
                    </div>
                    <button type='submit'>Submit</button>
                </form>
                <Link to='/manage-journals'>Back</Link>
            </div>


        )
    }
export default AddJournal

