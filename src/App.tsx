import { ChakraProvider } from '@chakra-ui/react'
import { ContextProvider } from './context'
import globalStyles from 'styles'
import { RouterProvider } from 'react-router-dom'
import { router } from 'routes'

function App() {
  return (
    <ContextProvider>
      <ChakraProvider theme={globalStyles}>
        <RouterProvider router={router}></RouterProvider>
      </ChakraProvider>
    </ContextProvider>
  )
}

export default App
