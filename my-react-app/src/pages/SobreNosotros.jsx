import React from 'react'
import { Stack, Text } from '@chakra-ui/react'

export const SobreNosotros = () => {
  return (
    <Stack maxWidth={500}>
        <Text color={"black"} maxWidth={"100%"} padding={"1rem"} background={"white"}>
        Esta aplicación tiene como objetivo emular una lista de tareas pendientes utilizando React y Vite para su construcción. Actualmente consta de una aplicación con tres páginas a las que se puede acceder a través del menú ubicado debajo del título de la app "TO-DO-IT APP". En la página "Home" se le da un mensaje de bienvenida al usuario. Si accede a la página "Tareas", es posible crear, modificar y eliminar tareas con la intención de gestionar mejor nuestro día a día, y finalmente está la página "Sobre nosotros", donde se encuentra la descripción de la aplicación que te encuentras leyendo en este momento.
        </Text>
    </Stack>
  )
}
