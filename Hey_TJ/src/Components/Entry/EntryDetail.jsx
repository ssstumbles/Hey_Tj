import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from "react"
import axios from "axios"

const EntryDetail = () => {

    const { entry_id } = useParams()
    const [entryDetails, setEntryDetails] = useState(null)
    const [deleteDetails, setDeleteDetails] = useState(null)
    const [updateEntryDetails, setUpdateEntryDetails] = useState(null)

    useEffect(() => {
        const getEntryDetails = async () => {
            const response = await axios.get('http://127.0.0.1:8000/entries/${journal_id}/')
            setEntryDetails(response.data)
        } catch (error) {
            console.error('Could not find details', error)
        }
        getEntryDetails()
    }, [entry_id])
  

    constHandleDelete = () => {
        const updateEntryDetails = async () => {
            const response = await axios.delete('http://127.0.0.1:8000/entries/')
            updateEntryDetails(response.data)
        }
        deleteEntryDetails()
    }, [entry_id]  

    
    constHandleUpdate = () => {
        const updateEntryDetails = async () => {
            const response = await axios.post('http://127.0.0.1:8000/entries/')
            updateEntryDetails(response.data)
        }
        updateEntryDetails()
    }, [entry_id]  

        }

        return (
            <div>
              <Link to="/manage-journals">Back</Link>
              {entryDetails ? (
                <div>
                  <h2>{entryDetails.name}</h2>
                  {/* Display other details of the entry here */}
                  {/* You can use a form here for updating the entry */}
                  <form onSubmit={handleUpdate}>
                    {/* Input fields for updating entry details */}
                    <button type="submit">Update</button>
                  </form>
                  <button onClick={handleDelete}>Delete</button>
                </div>
              ) : (
                <div>nothing here...</div>
              )}
            </div>
          )
        
        
        export default EntryDetail