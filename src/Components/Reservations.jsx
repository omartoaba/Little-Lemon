import React, { useState } from 'react'
import './Reservations.css'
import {Inside,Outside,Adults,Children,Clock,Date,Customer,Mail,Phone} from './imagesimports'
function Reservations() {
  const [location,setlocation] = useState('inside');
  const changelocation = (event) => {
        setlocation(event.target.id);
  }
  return (
    <div className='reservations_maincontainer'>
      <div className="reservations_header">
      <h2>Reserve a Table</h2>
      <hr/>
        <h3>Where do you want to Eat?</h3>
      </div>
      <form>
      <div className="reservation_location">
        <button className={location === 'inside' ? 'reservations_location-option active' : 'reservations_location-option'} 
          onClick={changelocation} id='inside' type='button'>
        <input type="radio" name='location' hidden/>
        <img src={Inside}/>
        <label htmlFor="inside">Inside</label>
        </button>
        <button className={location === 'outside' ? 'reservations_location-option active' : 'reservations_location-option'}
            onClick={changelocation} id='outside' type='button'>
          <input  type="radio" name='location' hidden/>
          <img src={Outside}/>
          <label htmlFor="outside">Outside</label>
        </button>
      </div>
      <div className="reservation_option">
          <img src={Adults} className='reservation_option-img'/>
          <input className='reservation_option-input'  type='number' placeholder='Adults'/>
        </div>
        <div className="reservation_option">
          <img src={Children} className='reservation_option-img'/>
          <input className='reservation_option-input' type='number' placeholder='Children'/>
        </div>
        <div className="reservation_option">
          <img src={Clock}className='reservation_option-img'/>
          <input className='reservation_option-input' type='number' placeholder='Time'/>
        </div>
        <div className="reservation_option">
          <img src={Date}className='reservation_option-img'/>
          <input className='reservation_option-input' type='date' placeholder='Date'/>
        </div>
        <div className="reservation_option">
          <img src={Customer}className='reservation_option-img'/>
          <input className='reservation_option-input' type='text' placeholder='Your Name'/>
        </div>
        <div className="reservation_option">
          <img src={Phone}className='reservation_option-img'/>
          <input className='reservation_option-input' type='phone' placeholder='Phone'/>
        </div>
        <div className="reservation_option">
          <img src={Mail}className='reservation_option-img'/>
          <input className='reservation_option-input' type='email' placeholder='Email'/>
        </div>
        <div className="reservarionsfooter">
        <button className='primaryButton' type='button'>Reserve Table</button>
        <button className='secondaryButton' type='button'>Cancel</button>
        </div>
        </form>
    </div>
  )
}

export default Reservations