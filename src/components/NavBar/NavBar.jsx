import React from 'react'
import { CardWidget } from '../CardWidget/CardWidget'
import { Flex, Heading } from '@chakra-ui/react'
import { Menu, MenuButton, MenuList, MenuItem, Portal, MenuGroup, MenuOptionGroup, MenuDivider } from '@chakra-ui/react'
import './NavBar.css'
const NavBar = () => {
    return (
        <div id='menu'>
            <Flex justify='space-between' alignItems='center'>
                <Menu>
                    <MenuButton><CardWidget /></MenuButton>
                    <Portal>
                        <MenuList>
                            <MenuItem>Menu 1</MenuItem>
                            <MenuItem>New Window</MenuItem>
                            <MenuItem>Open Closed Tab</MenuItem>
                            <MenuItem>Open File</MenuItem>
                        </MenuList>
                    </Portal>
                </Menu>
                <Heading id='titulo'>Mi tienda</Heading>
                <Heading></Heading>
            </Flex>
        </div>
    )
}

export default NavBar