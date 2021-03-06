import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import { authenticate, getUser } from '../utils/helper'


const Login = props => {
  // initialize the state
  const [state, setState] = useState({
    email: '',
    password: ''
  })
  // destructure the state
  const {email, password} = state

  useEffect(() => {
    getUser() && props.history.push('/')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // onChange event handler
  const handleChange = name => event => {
    // console.log('name:', name, 'event:', event)
    setState({...state, [name]: event.target.value})
  }

  const handleSubmit = event => {
    event.preventDefault()
    // Send the email and password in the text box to the API and store the token and username in session storage if successful
    axios
      .post('/signin', { email, password })
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
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="text-muted">Email</label>
          <input onChange={handleChange('email')} type="text" value={email} className="form-control" placeholder="Email" required />
        </div>
        <div className="form-group">
          <label className="text-muted">Password</label>
          <input onChange={handleChange('password')} type="password" value={password} className="form-control" required />
        </div>
        <div>
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
   )

}

export default withRouter(Login)