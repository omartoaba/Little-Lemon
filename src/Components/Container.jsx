import React from 'react'
import Nav from './Nav'
import { useLocation, useNavigate } from 'react-router-dom'
import { Stack,Box, HStack, Avatar,AvatarBadge, Spacer,Popover,PopoverTrigger,PopoverContent,PopoverHeader,Text,PopoverArrow,PopoverCloseButton,PopoverBody, Button, Divider, DarkMode, IconButton } from '@chakra-ui/react'
import * as actions from '../actions/userActions';
import Footer from './Footer'
import Login from './Login'
import { connect } from 'react-redux'
import {FaShoppingCart} from 'react-icons/fa'

function Container(props) {
   const location = useLocation();
   const navigate = useNavigate();
   const isLoginPage = location.pathname === '/login';
  return (
     <Stack spacing={5}>
      {isLoginPage ? <Login/> :
         <>
          <header className='mainnavbar'>
            <HStack padding='5px 15px' justify={'center'} bg={'white'} width={'100%'} spacing={5}>
               <Spacer/>
               <Nav/>
               <Spacer/>
               <Popover
                  placement='bottom'
                  closeOnBlur={true}>
                  <PopoverTrigger>
                     <Avatar cursor={'pointer'} size={'sm'} icon={<FaShoppingCart color='black' size={'18'}/>} bg={'#ECEEED'}>
                        <AvatarBadge boxSize='1.8em' bg='red.500' alignItems={'center'} fontSize={'12'}>99</AvatarBadge>
                     </Avatar>
                  </PopoverTrigger>
                  <PopoverContent>
                     <PopoverHeader pt={4} fontWeight='bold' border='0'>
                        <HStack>
                           <Text fontSize={'md'} fontWeight={'semibold'}>Total Cart Items: $120</Text>
                        </HStack>
                     </PopoverHeader>
                     <PopoverArrow />
                     <PopoverCloseButton />
                     <PopoverBody>
                           <Divider/>
                           <HStack justify={'space-between'} spacing={5} my={'2'}>
                              <Button colorScheme='green' variant={'solid'}>Pay Now</Button>
                              <Button colorScheme='red' variant={'ghost'}>Clear Cart</Button>
                           </HStack>
                     </PopoverBody>
                  </PopoverContent>
                  </Popover>
                  <Popover
                  placement='bottom'
                  closeOnBlur={true}>
                  <PopoverTrigger>
                     <Avatar cursor={'pointer'} name={props.username} size={'sm'} src='https://bit.ly/broken-link'>
                         <AvatarBadge boxSize='1em' bg='green.500'/>
                     </Avatar>
                  </PopoverTrigger>
                  <PopoverContent>
                     <PopoverHeader pt={4} fontWeight='bold' border='0'>
                        <HStack>
                           <Avatar name={props.username} size={'sm'} src='https://bit.ly/broken-link'/>
                           <Text fontSize={'md'}>{props.username}</Text>
                        </HStack>
                     </PopoverHeader>
                     <PopoverArrow />
                     <PopoverCloseButton />
                     <PopoverBody>
                           <Divider/>
                           <Button width={'100%'} colorScheme='red' variant={'ghost'} onClick={() => navigate('/login')}>Logout</Button>
                     </PopoverBody>
                  </PopoverContent>
                  </Popover>
            </HStack>
          </header>
          <main>
             <Box mt={10}>
               {props.children}
             </Box>
          </main>
          <footer>
            <Footer/>
          </footer>
      </>
      }
     </Stack>
  )
}
const mapStateToProps = state => ({
   username:state.userReducer.username,
   password:state.userReducer.password
 })
 const mapActionsToProps = {
   logout : actions.logout
 }
export default connect(mapStateToProps,mapActionsToProps)(Container);