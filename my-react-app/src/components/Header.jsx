import "../App.css";
import { Heading, Link, Stack } from '@chakra-ui/react'

function Header() {
    return (
      <Stack gap={7}>
        <Heading color="white" as='h1' size='4xl' noOfLines={1}>
        TO-DO-IT APP
        </Heading>
        <Stack direction={"row"} justifyContent={"center"} gap={10}>
          <Link color="aqua" href="/">Home</Link>
          <Link color="aqua" href="/SobreNosotros">Sobre Nosotros</Link>
          <Link color="aqua" href="/Tareas">Tareas</Link>
        </Stack>
      </Stack>
    );
  }
  
  export default Header;