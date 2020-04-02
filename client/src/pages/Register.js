import React, {useState } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import { authenticate } from '../utils/helper'

const Register = props => {
  // initialize the state
  const [state, setState] = useState({
    email: '',
    password: '',
    phone: ''
  })
  // destructure the state
  const {email, password, phone} = state

  // onChange event handler
  const handleChange = name => event => {
    // console.log('name:', name, 'event:', event)
    setState({...state, [name]: event.target.value})
  }

  const handleSubmit = event => {
    event.preventDefault()
    axios
      .post('/signup', { email, password, phone })
      .then(response => {
        //console.log(response)
        // response will contain token and name
        authenticate(response, () => props.history.push('/create'))
        // redirect to create page
      })
      .catch(error => {
          console.table(error)
          alert(error.response)
      })
  }

   return (
    <div className="container pb-5">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="text-muted">Email</label>
          <input onChange={handleChange('email')} type="text" value={email} className="form-control" placeholder="Email" required />
        </div>
        <div className="form-group">
          <label className="text-muted">Password</label>
          <input onChange={handleChange('password')} type="password" value={password} className="form-control" required />
        </div>
        <div className="form-group">
          <label className="text-muted">Phone</label>
          <input onChange={handleChange('phone')} type="text" value={phone} className="form-control" required />
        </div>
        <div>
          <button className="btn btn-primary">Sign Up</button>
        </div>
      </form>
    </div>
   )

}

export default withRouter(Register)