import React from 'react'
import Testimony from './Testimony'
import { Stack, Wrap,WrapItem,Heading } from '@chakra-ui/react'
const testimonials = [
    {
      avatar:"https://randomuser.me/api/portraits/women/60.jpg",        
      user: "Sarah M.",
      rating: 5,
      testimonial: "Little Lemon is an absolute gem! The Mediterranean dishes are top-notch, and the flavors are out of this world. I can't get enough of their falafel!"
    },
    {
      avatar:"https://randomuser.me/api/portraits/men/40.jpg",
      user: "John D.",
      rating: 4,
      testimonial: "I thoroughly enjoyed my meal at Little Lemon. The service was great, and their hummus is divine. I'll be coming back for more."
    },
    {
      avatar:"https://randomuser.me/api/portraits/women/28.jpg",
      user: "Emily R.",
      rating: 4,
      testimonial: "Little Lemon's Mediterranean cuisine is a delightful experience. The atmosphere is cozy, and the kebabs are a must-try. I had a lovely evening."
    },
    {
      avatar:"https://randomuser.me/api/portraits/men/94.jpg",
      user: "Mark B.",
      rating:3,
      testimonial: "I found Little Lemon to have a nice selection of Mediterranean dishes. The tabbouleh salad was refreshing, but I expected a bit more variety in the menu."
    },
    {
      avatar:"https://randomuser.me/api/portraits/women/68.jpg",
      user: "Lisa F.",
      rating: 3,
      testimonial: "Little Lemon is a decent spot for Mediterranean food. The lamb shawarma was tasty, but I wished the portion size was a bit larger for the price."
    },
    {
      avatar:"https://randomuser.me/api/portraits/women/89.jpg",
      user: "Alex H.",
      rating: 3,
      testimonial: "I found Little Lemon's Mediterranean food to be good, although the service was a bit slow. While the flavors were decent, I think there's room for improvement."
    },
    {
      avatar:"https://randomuser.me/api/portraits/women/10.jpg",
      user: "Maria S.",
      rating: 3,
      testimonial: "My experience at Little Lemon was decent. The falafel had potential but was a bit dry, and the pita bread could be fresher. I believe they can refine their offerings."
    },
    {
      avatar:"https://randomuser.me/api/portraits/men/21.jpg",
      user: "Michael P.",
      rating: 3,
      testimonial: "My visit to Little Lemon was okay. The food was not as flavorful as I expected, and the service could be more attentive. I'm open to giving it another try in the future."
    }
  ];
function Testimonials() {
  return (
    <>
    <Stack spacing={8} alignItems={'center'}>
        <Heading>Testimonials</Heading>
    <Wrap justify='center'>
        {testimonials.map((data,index) => {
          return(
          <WrapItem key={index}>
            <Testimony avatar={data.avatar} username={data.user} rating={data.rating} quote={data.testimonial}/>
          </WrapItem>)
      })}
    </Wrap>

    </Stack>
    </>
  )
}

export default Testimonials