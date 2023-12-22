import { ChakraProvider, Stack } from '@chakra-ui/react'

const Layout = ({children}) => {
  return (
    <ChakraProvider>
        <Stack justifyContent={"center"} alignItems={"center"}>{children}</Stack>
    </ChakraProvider>
  )
}

export default Layout;