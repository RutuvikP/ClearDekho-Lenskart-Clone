import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
  } from '@chakra-ui/react'
import { Sidebar } from './Sidebar'
import React from 'react'

import { RxHamburgerMenu } from "react-icons/rx";

  function SidebarMob() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
        <Button display={["flex","flex","flex","none","none"]} size={"sm"} border={"1px solid black"} ref={btnRef} color="black" variant={"ghost"} onClick={onOpen}>
          <RxHamburgerMenu />
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>SideBar</DrawerHeader>
  
            <DrawerBody>
              <Sidebar />
            </DrawerBody>
  
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

  export default SidebarMob