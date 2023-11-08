import React from 'react'
import Logo from '../assets/Logo.svg'
import './Nav.css'
import { HStack, Avatar,AvatarBadge, Spacer,Popover,PopoverTrigger,PopoverContent,PopoverHeader,Text,PopoverArrow,PopoverCloseButton,PopoverBody, Button,
  Divider, PopoverFooter,TableContainer,Table,Thead,Tbody,Tr,Td,Th, IconButton  } from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import {FaShoppingCart} from 'react-icons/fa';
import {MdDelete} from 'react-icons/md';
import * as actions from '../actions/userActions';
import * as cartActions from '../actions/cartActions';

function Nav(props) {   
  const navigate = useNavigate();
  return (
     <HStack padding='5px 15px' justify={'center'} bg={'white'} width={'100%'} spacing={5}>
     <Spacer/>
        <nav>
          <HStack>
            <img src={Logo}/>
          <ul className='navbar_links'>
            <li className='navbar_link'><Link to='/'>Home</Link></li>
            <li className='navbar_link'><a href='#about'>About</a></li>
            <li className='navbar_link'><Link to='menu'>Menu</Link></li>
            <li className='navbar_link'><Link to='reservations'>Reservations</Link></li>
            <li className='navbar_link'><Link to='orderonline'>Order Online</Link></li>
          </ul>
          </HStack>
        </nav>
     <Spacer/>
     <Popover
        placement='bottom'
        closeOnBlur={true}>
        <PopoverTrigger>
           <Avatar cursor={'pointer'} size={'sm'} icon={<FaShoppingCart color='black' size={'18'}/>} bg={'#ECEEED'}>
              <AvatarBadge boxSize='1.8em' bg='red.500' alignItems={'center'} fontSize={'12'}>{props.products.length}</AvatarBadge>
           </Avatar>
        </PopoverTrigger>
        <PopoverContent>
           <PopoverHeader pt={4} fontWeight='bold' border='0'>
              <HStack>
                 <Text fontSize={'md'} fontWeight={'semibold'}>Total Cart Items: ${props.products.map(p => p.price).reduce((p,n) => p+n,0).toFixed(2)}</Text>
              </HStack>
           </PopoverHeader>
           <PopoverArrow />
           <PopoverCloseButton />
           <PopoverBody>
              {props.products.length > 0 ?
              <TableContainer maxHeight={'300px'} overflowY={'auto'} overflowX={'hidden'}>
                  <Table variant='simple' size={'sm'}>
                    <Thead bg={'transparent'}>
                       <Tr>
                          <Th bg={'transparent'} borderColor={'transparent'}>Dish</Th>
                          <Th bg={'transparent'} borderColor={'transparent'}>Count</Th>
                       </Tr>
                    </Thead>
                    <Tbody>
                       {props.products.map((product,index) => {
                          return <Tr key={index}>
                                   <Td>{product.title}</Td>
                                   <Td>{1}</Td>
                                   <Td><IconButton variant={'ghost'} icon={<MdDelete size={'20'} color='red'/>}/></Td>
                                </Tr>
                       })}
                    </Tbody>
                 </Table>
              </TableContainer> : <Text fontSize={'12'}>your cart is empty.</Text>}
           </PopoverBody>
           <PopoverFooter>
                 <HStack justify={'space-between'} spacing={5}>
                    <Button colorScheme='green' variant={'solid'}>Check out</Button>
                    <Button colorScheme='red' variant={'outline'} onClick={() => props.clearCart()}>Clear Cart</Button>
                 </HStack>
           </PopoverFooter>
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
  )
}
const mapStateToProps = state => ({
  username:state.userReducer.username,
  password:state.userReducer.password,
  products:state.cartReducer.products
})
const mapActionsToProps = {
  logout : actions.logout,
  clearCart: cartActions.clearCart
}
export default connect(mapStateToProps,mapActionsToProps)(Nav)