import { render,screen,fireEvent } from "@testing-library/react";
import { useState } from "react";
import BookingForm from "../Components/BookingForm";

test('should remove a time when the user clicks reserver table', () =>
 {
    const [availibletimes,setavailibletimes] = useState([{time:'10:00 am',state:'Availible'},{time:'11:00 am',state:'Availible'},
    {time:'12:00 am',state:'Availible'},{time:'01:00 pm',state:'Availible'},{time:'02:00 pm',state:'Availible'},{time:'03:00 pm',state:'Availible'},{time:'05:00 pm',state:'Availible'},
 {time:'06:00 pm',state:'Availible'},{time:'07:00 pm',state:'Availible'},{time:'08:00 pm',state:'Availible'},{time:'09:00 pm',state:'Availible'},{time:'10:00 pm',state:'Availible'}]);
     render(<BookingForm availibletimes={availibletimes} setavailibletimes={setavailibletimes}/>)
     const times = screen.getByRole('select')[0];
     const sumbit = screen.findByRole('button')
     
 });
