import React from 'react'
import './BookingSlot.css'

function BookingSlot({availibletimes}) {
  return (
    <div className='bookingslot_container'>
      <h2>Availible Booking Times</h2>
      <hr/>
      <table>
        <thead>
          <tr>
            <th>
              Availible Times 
            </th>
            <th>Booked</th>
          </tr>
        </thead>
        <tbody>

            {availibletimes.map((data,index) => {
               return (
                <tr>
                  <td key={index}>{data.time}</td>
                  <td key={index*3}>{data.state}</td>
                </tr>
               )
            })}

        </tbody>
      </table>
    </div>
  )
}

export default BookingSlot