import React, { useEffect, useState } from 'react'
import './Reservations.css'
import BookingTableForm from './BookingTableForm';
import { Stack } from '@chakra-ui/react';


function Reservations() {
 const [availibletimes,setavailibletimes] = useState([{time:'10:00 am',state:'Availible'},{time:'11:00 am',state:'Availible'},
 {time:'12:00 am',state:'Availible'},{time:'01:00 pm',state:'Availible'},{time:'02:00 pm',state:'Availible'},{time:'03:00 pm',state:'Availible'},{time:'05:00 pm',state:'Availible'},
 {time:'06:00 pm',state:'Availible'},{time:'07:00 pm',state:'Availible'},{time:'08:00 pm',state:'Availible'},{time:'09:00 pm',state:'Availible'},{time:'10:00 pm',state:'Availible'}]);
 // useEffect( async() => {
 //   try {
     // var response = await fetchAPI(Date.now);

 //   } catch (error) {
     // console.log(response);
  //  }
 // },[]);
 
 return (

  <Stack mt={'60px'} padding={10}>
    <BookingTableForm/>
  </Stack>
  )
}

export default Reservations