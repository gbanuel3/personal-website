import React from 'react'
import {
  Flex,
  IconButton,
  useColorMode,
  Box,
  useBreakpointValue,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon, HamburgerIcon } from '@chakra-ui/icons'
import { colors } from '@/constants'
import { FaHome, FaUser, FaPen, FaProjectDiagram, FaGithub } from 'react-icons/fa'
import NavigationBarButton from './navigation_bar_button'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Url } from 'next/dist/shared/lib/router/router'
import DropdownMenuItem from './dropdown_menu_item'

const navItems = [
  { url: '/', icon: <FaHome />, label: 'Home', isExternal: false },
  { url: '/about', icon: <FaUser />, label: 'About', isExternal: false },
  { url: '/blog', icon: <FaPen />, label: 'Blog', isExternal: false },
  {
    url: '/projects',
    icon: <FaProjectDiagram />,
    label: 'Projects',
    isExternal: false,
  },
  {
    url: 'https://github.com/gbanuel3',
    icon: <FaGithub />,
    label: 'GitHub',
    isExternal: true,
  },
]

function NavigationBar() {
  const router = useRouter()
  const { colorMode, toggleColorMode } = useColorMode()
  const [selectedItem, setSelectedItem] = useState({ label: 'Menu', icon: <HamburgerIcon /> });
  const isMobile = useBreakpointValue({ base: true, md: false })

  const handleNavItemClick = (item: any, isExternal = false) => {
    setSelectedItem({label: item.label, icon: item.icon})
    if (isExternal) {
      window.open(item.url, '_blank')
    } else {
      router.push(item.url)
    }
  }

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      padding="1rem"
      bg={colors[colorMode].bg_color}
      color={colorMode === 'light' ? 'black' : 'white'}
      mt={'5px'}
    >
      {isMobile ? (
        <Menu>
          <MenuButton
            as={Button}
            leftIcon={selectedItem.icon}
            variant="outline"
          >
            {selectedItem.label}
          </MenuButton>
          <MenuList bg={colors[colorMode].bg_color}>
            {navItems.map((item) => (
              <DropdownMenuItem
                icon={item.icon}
                text={item.label}
                href={item.url}
                onClick={() => handleNavItemClick(item, item.isExternal)}
              />
            ))}
          </MenuList>
        </Menu>
      ) : (
        <Flex align="center" gap={'2px'}>
          {navItems.map((item) => (
            <NavigationBarButton
              icon={item.icon}
              text={item.label}
              href={item.url}
              isActive={router.pathname === item.url}
              onClick={() => handleNavItemClick(item, item.isExternal)}
            />
          ))}
        </Flex>
      )}

      <IconButton
        size="md"
        fontSize="lg"
        aria-label={`Switch to ${colorMode === 'light' ? 'dark' : 'light'} mode`}
        variant="ghost"
        color="current"
        ml="2"
        mr="4"
        onClick={toggleColorMode}
        icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
      />
    </Flex>
  )
}

export default NavigationBar
