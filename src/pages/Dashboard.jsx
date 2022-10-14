import React, { useEffect, useState } from 'react'
import {Http} from '../services/Http'

const Dashboard = () => {
  const [books, setBooks] = useState([]);

  useEffect(()=>{
    Http.get('/booking')
    .then(res => setBooks(res.data))
    .catch(error => console.log(error))
  },[])




  return (
    <div className='row'>
      <div className="col-12">
        <h1>Reservas</h1>
        {
          books.map(data => {
            <li>{data.lenght}</li>
          })
        }
      </div>
    </div>
  )
}

export default Dashboard