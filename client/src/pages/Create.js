import React, {useState} from 'react'
import axios from 'axios'
import { getToken } from '../utils/helper'

const Create = (props) => { 
  const [state, setState] = useState({
      title: '',
      content: '',
      due: '',
      status: 'active'
  })

  // dectructure values from state
  const {title, content, due, status } = state
  // onChange event handler
  const handleChange = name => event => {
    // console.log('name:', name, 'event:', event)
    setState({...state, [name]: event.target.value})
  }

  const handleSubmit = event => {
    event.preventDefault()
    // console.table({title, content, date, status})
    // convert date to ISO format, add the Authoization header, then post to the /reminder API and confirm successful addition
    let date = new Date(due).toISOString
    const config = {
        headers: { Authorization: `Bearer ${getToken()}` }
    }
    axios
      .post('api/reminder', { title, content, due: date, status }, config)
      .then(response => {
        //console.log(response)
        // empty state
        setState({ ...state, title: '', content: '', due: '', status: 'active' })
        // show sucess alert
        alert(`Post titled ${response.data.doc.title} is created`)
      })
      .catch(error => {
        console.log(error.response)
        alert(error.response.data.error)
      }) 
    
  }

  return (
    <div className="container p-5">
      <h1>CREATE REMINDER</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="text-muted">Title</label>
          <input onChange={handleChange('title')} type="text" value={title} className="form-control" placeholder="Reminder title" required />
        </div>
        <div className="form-group">
          <label className="text-muted">Content</label>
          <textarea onChange={handleChange('content')} type="text" value={content} className="form-control" placeholder="Reminder goes here" required />
        </div>
        <div className="form-group">
          <label className="text-muted">Reminder Date</label>
          <input onChange={handleChange('due')} type="date" value={due} className="form-control" required />
        </div>
        <div>
          <button className="btn btn-primary">Create</button>
        </div>
      </form>
    </div>
  )
}

export default Create
