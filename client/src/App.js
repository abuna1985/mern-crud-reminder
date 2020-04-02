import React, {useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { getToken, getUser } from './utils/helper'

const App = () => {
  const [reminders, setReminders] = useState([])

  const fetchReminders = () => {
    const config = {
      headers: { Authorization: `Bearer ${getToken()}` }
    }
    axios
      .get(`/api/reminder`, config)
        .then(response => {
          console.log(response)
          setReminders(response.data.docs)
        })
        .catch(error => {
          alert('Error fetching reminders')
          console.error(error)
        })
  }
  // const deleteConfirm = slug => {
  //   let answer = window.confirm('Are you sure you want to delete this post?');
  //   if (answer) {
  //       deletePost(slug);
  //   }
  // };

  // const deletePost = slug => {
  //   // console.log('delete', slug, ' post');
  //   axios
  //     .delete(`${process.env.REACT_APP_API}/post/${slug}`)
  //     .then(response => {
  //       alert(response.data.message);
  //       fetchReminders();
  //     })
  //     .catch(error => alert('Error deleting post'));
  // };

  useEffect(() => {
    fetchReminders();
  }, [])

  if (!reminders.length) {
    return <p>Sorry, the list is empty.</p>;
  }


  return (
    <div className="container pb-5">
    <h1>MERN CRUD</h1>
    <hr />
    {reminders.map((reminder, i) => (
        <div className="row" key={reminder._id} style={{ borderBottom: '1px solid silver' }}>
            <div className="col pt-3 pb-2">
                <div className="row">
                    <div className="col-md-10">
                        <Link to={`/reminder/${reminder._id}`}>
                            <h2>{reminder.title}</h2>
                        </Link>
                        <p className="lead">{reminder.content.substring(0, 100)}</p>
                        <p>
                            Author <span className="badge">{getUser()}</span> Published on{' '}
                            <span className="badge">{new Date(reminder.createdAt).toLocaleString()}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    ))}
</div>
  )
}

export default App
