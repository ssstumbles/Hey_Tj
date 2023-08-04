import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from "react"
import axios from "axios"
// import updateEntry from './UpdateEntry'

const EntryDetail = () => {

    const { entry_id } = useParams()
    const [entryDetails, setEntryDetails] = useState(null)
    const [deleteDetails, setDeleteDetails] = useState(null)
    const [updateEntryDetails, setUpdateEntryDetails] = useState(null)

    useEffect(() => {
        const getEntryDetails = async () => {
            const response = await axios.get(`http://127.0.0.1:8000/entries/${entry_id}`)
            setEntryDetails(response.data)
            setWriteup(response.data.writeup)
        } 
        getEntryDetails()
    }, [entry_id])
  

    const handleDelete = () => {
        const deleteEntryDetails = async () => {
            const response = await axios.delete(`http://127.0.0.1:8000/entries/${entry_id}`)
            deleteEntryDetails(response.data)
        }
        deleteEntryDetails()
    }

    const [writeup, setWriteup] = useState('')

    const handleUpdate = () => {
        const updateEntryDetails = async () => {
            const response = await axios.put(`http://127.0.0.1:8000/entries/${entry_id}`,
            {
              name: entryDetails.name,
              writeup: writeup,
            }
            )

    
            
            updateEntryDetails(response.data)
        }
        updateEntryDetails()
    }

        return (
            <div>
              
              {entryDetails ? (
                <div>
                  <h2>{entryDetails.name}</h2>
                  <input 
                    type='text'
                    value={writeup} onChange={(e) => setWriteup(e.target.value)}>
                  

                  </input>
                         
                  <button onClick={handleUpdate}>Update</button>
                  <button onClick={handleDelete}>Delete</button>
                </div>
              ) : (
                <div>nothing here...</div>
                
              )}
              <Link to="/manage-journals">Back</Link>
            </div>
          )
              }
        
        export default EntryDetail