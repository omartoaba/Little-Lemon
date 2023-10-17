import React from 'react'
import {Inside,Outside,Adults,Children,Clock,Date,Customer,Mail,Phone} from './imagesimports'
import { useForm } from "react-hook-form";
import './BookingForm.css'
import { useState } from 'react'

function BookingForm() {
  
    const { register, handleSubmit, formState: { errors } } = useForm()
    
  const onSubmit = (data) => {
      console.log(data)
  }

  const [location,setlocation] = useState('inside');
  const changelocation = (event) => {
        setlocation(event.target.id);
  }


  return (
    <div className='bookingform_maincontainer'>
      <div className="bookingform_header">
      <h2>Reserve a Table</h2>
      <hr/>
        <h3>Where do you want to Eat?</h3>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className="bookingform_location">
        <button className={location === 'inside' ? 'bookingform_location-option active' : 'bookingform_location-option'} 
          onClick={changelocation} id='inside' type='button'>
        <input type="radio" name='location' hidden/>
        <img src={Inside}/>
        <label htmlFor="inside">Inside</label>
        </button>
        <button className={location === 'outside' ? 'bookingform_location-option active' : 'bookingform_location-option'}
            onClick={changelocation} id='outside' type='button'>
          <input  type="radio" name='location' hidden/>
          <img src={Outside}/>
          <label htmlFor="outside">Outside</label>
        </button>
      </div>
      <div className="bookingform_option">
          <img src={Adults} className='bookingform_option-img'/>
          <input className='bookingform_option-input'  type='number' placeholder='Guests'
          {...register('adults',{required:true,min:1,max:15})}/>
        </div>
        <div className="bookingform_option">
          <img src={Clock}className='bookingform_option-img'/>
          <select id="res-time " className='bookingform_option-select'>
          <option>Select Time</option>
      <option>17:00</option>
      <option>18:00</option>
      <option>19:00</option>
      <option>20:00</option>
      <option>21:00</option>
      <option>22:00</option>
   </select>
        </div>
        <div className="bookingform_option">
          <img src={Date}className='bookingform_option-img'/>
          <input className='bookingform_option-input' type='date' placeholder='Date'
            {...register('date',{required:true})}/>
        </div>
        <div className="bookingform_option">
          <img src={Date}className='bookingform_option-img'/>
          <select id="occasion" className='bookingform_option-select'>
          <option>Select Occasion</option>
      <option>Birthday</option>
      <option>Anniversary</option>
   </select>
        </div>
        <div className="bookingform_option">
          <img src={Customer}className='bookingform_option-img'/>
          <input className='bookingform_option-input' type='text' placeholder='Your Name'
              {...register('customer',{required:true,min:1,max:15})}/>
        </div>
        <div className="bookingform_option">
          <img src={Phone}className='bookingform_option-img'/>
          <input className='bookingform_option-input' type='phone' placeholder='Phone'
          {...register('phone',{required:true,min:1,max:15})}/>
        </div>
        <div className="bookingform_option">
          <img src={Mail}className='bookingform_option-img'/>
          <input className='bookingform_option-input' type='email' placeholder='Email'
            {...register('email',{required:true,min:1,max:15})}/>
        </div>
        <div className="bookingform_footer">
        <button className='primaryButton' type='submit'>Reserve Table</button>
        <button className='secondaryButton' type='button'>Cancel</button>
        </div>
        </form>
    </div>
  )
}

export default BookingForm