import { Stack, HStack, Spacer,Text,Heading,Image,List,ListItem,ListIcon,Button,Icon } from '@chakra-ui/react'
import React from 'react'
import FooterBanner from '../assets/footerImg.jpg'
import FooterLogo from '../assets/footerlogo.png'
import {MdHome,MdInfo,MdRestaurantMenu,MdTableRestaurant,MdRestaurant,MdFacebook,MdEmail} from 'react-icons/md'
import {BiLogoInstagramAlt} from 'react-icons/bi'
function Footer() {
  return (
    <Stack spacing={0}>
        <HStack background={'var(--primary-color)'} padding={10} align={'start'} > 
            <Stack>
                <Heading size={'lg'}>
                    Little Lemon Chicago
                </Heading>
                <Text fontSize={'md'} fontWeight={700} maxW={400} lineHeight={1.3}>
                    Little Lemon opened in 1995 by two Italian brothers, Adrian and Mario. Despite the city's diversity, the two brothers
                    recongnized the lack of Mediterranean cuisine in Chicago, and were inspired to bring the flavors of thier hometown in 
                    Italy to the people of Chicago. This two brothers continue to oversee the Little Lemon restaurant, nearly thirty years later.
                </Text>
            </Stack>
            <Spacer/>
            <Image src={FooterBanner} 
            borderRadius='full'
            boxSize='230px'
            />
        </HStack>
        <HStack background={'var(--seconday-color)'} paddingX={150} paddingY={10} align={'start'} justifyContent={'space-between'} color={'white'} >
            <Image src={FooterLogo} aspectRatio={'auto'} width={70}/>
            <HStack justifyContent={'space-between'} width={'100%'} ml={20} mr={20} align={'start'}>
                <Stack>
                    <Heading size={'md'}>Navigation</Heading>
                    <List spacing={0}>
                        <ListItem color={'white'}>
                            <a href='/'>
                                 <Button background={'transparent'} leftIcon={<Icon as={MdHome} size={20}/>} alignItems={'center'} color={'white'}>
                                     Home
                                </Button>
                            </a>
                        </ListItem>
                        <ListItem color={'white'}>
                            <a href='about'>
                                 <Button background={'transparent'} leftIcon={<Icon as={MdInfo} size={20}/>} alignItems={'center'} color={'white'}>
                                     About
                                </Button>
                            </a>
                        </ListItem>
                        <ListItem color={'white'}>
                             <a href='menu'>
                                 <Button background={'transparent'} leftIcon={<Icon as={MdRestaurantMenu} size={20}/>} alignItems={'center'} color={'white'}>
                                     Menu
                                </Button>
                            </a>
                        </ListItem>
                        <ListItem color={'white'}>
                            <a href='reservations'>
                                 <Button background={'transparent'} leftIcon={<Icon as={MdTableRestaurant} size={20}/>} alignItems={'center'} color={'white'}>
                                 Reservations
                                </Button>
                            </a>
                        </ListItem>
                        <ListItem color={'white'}>
                            <a href='reservations'>
                                 <Button background={'transparent'} leftIcon={<Icon as={MdRestaurant} size={20}/>} alignItems={'center'} color={'white'}>
                                 Order
                                </Button>
                            </a>
                        </ListItem>
                    </List>
                </Stack>
                <Stack>
                    <Heading size={'md'}>Contact</Heading>
                    <Text width={200} fontSize={'md'}>
                        2395 Maldove Way,
                        Chicago Illinios
                        (629)-243-6827
                        info@littlelemon.com
                    </Text>
                </Stack>
                <Stack>
                    <Heading size={'md'}>Connect</Heading>
                    <List spacing={0}>
                        <ListItem color={'white'}>
                            <a href='https://www.facebook.com'>
                                 <Button background={'transparent'} leftIcon={<Icon as={MdFacebook} size={20}/>} alignItems={'center'} color={'white'}>
                                     Facebook
                                </Button>
                            </a>
                        </ListItem>
                        <ListItem color={'white'}>
                            <a href='https://www.instagram.com'>
                                 <Button background={'transparent'} leftIcon={<Icon as={BiLogoInstagramAlt} size={20}/>} alignItems={'center'} color={'white'}>
                                     Instagram
                                </Button>
                            </a>
                        </ListItem>
                        <ListItem color={'white'}>
                             <a href='/'>
                                 <Button background={'transparent'} leftIcon={<Icon as={MdEmail} size={20}/>} alignItems={'center'} color={'white'}>
                                     Join Us!
                                </Button>
                            </a>
                        </ListItem>
                    </List>
                </Stack>
            </HStack>
        </HStack>
    </Stack>
  )
}

export default Footer