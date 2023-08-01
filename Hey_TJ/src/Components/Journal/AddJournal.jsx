import { Link } from 'react-router-dom'
import { useState, useContext, useEffect } from 'react'
import  Calendar from 'react-calendar'
import axios from 'axios'
import api from '../API/Base'

const AddJournal = () => {
    
    const [journals, setJournals] = useState ([])


    const initialState = {
        "journal_id": '',
        "journal_name": '',
        // "journal_photos": <input type="url" name="" id="" />, don't think this is necessary here, bit will be on update page
        "journal_date_start": new Date(),
        "journal_ongoing": false,
        "journal_date_end": '',
        "journal_locations": '',
    }
    
    const [formState, setFormState] = useState(initialState)

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.id]: e.target.value })
    }

    const handleOngoingChange = (e) => {
        setFormState({ ...formState, journal_ongoing: e.target.checked });
    }
        //remember this vast fuckery for later
        const formatDate = (dateStr) => {
            const date = new Date(dateStr)
            const year = date.getFullYear()
            const month = String(date.getMonth() + 1).padStart(2, "0")
            const day = String(date.getDate()).padStart(2, "0")
            return `${year}-${month}-${day}`
          }
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(formState)

        await axios.get('http://postgres://yootkaqj:k-HDt_Vm3hbwW-VCPYmBf7QsU3VH84Rz@hansken.db.elephantsql.com/yootkaqj/journal/', formState)
             .then((response) => {
        console.log(response.data)
      })
      .catch((error) => {
        console.error('Error creating journal:', error);
      })
    }

    const handleCalendarChange = (date) => {
        const formattedDate = formatDate(date)
        setFormState({ ...formState, journal_date_start: (formattedDate) })
    }

    // axios
    //   .post('http://127.0.0.1:8000/admin/TJ/journal/', formState)
    //   .then((response) => {
    //     console.log(response.data)
    //   })
    //   .catch((error) => {
    //     console.error('Error creating journal:', error);
    //   })

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
                    {/* <div> photo field added here if needed </div> */}

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

