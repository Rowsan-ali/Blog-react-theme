import { ChakraProvider } from '@chakra-ui/react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Button,
    ChevronDownIcon
  } from '@chakra-ui/react'


function HamburgerMenu(){
    return(
        <>
        <ChakraProvider>
            <div className='HamburgerMenu'>
        <Menu>
  <MenuButton as={Button} >
  ☰
  </MenuButton>
  <MenuList>
<MenuItem>Home</MenuItem>
    <MenuItem>Blog</MenuItem>
    <MenuItem>Contact us</MenuItem>
    <MenuItem>About us</MenuItem>
    <MenuItem>SUBSCRIBE</MenuItem>
  </MenuList>
</Menu>
</div>
        </ChakraProvider>
        </>
    )
}

export default HamburgerMenu;