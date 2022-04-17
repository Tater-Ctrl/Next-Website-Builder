import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Box, ChakraProvider} from '@chakra-ui/react'
import PageMenu from '../components/page-menu/page-menu'
import HeaderMenu from '../components/header-menu/header-menu'
import OptionsMenu from '../components/options-menu/options-menu'
import { Provider } from 'react-redux'
import { store } from "../redux/store"
import BuilderBody from '../components/builder-body/builder-body'
import BuilderContent from '../components/builder-content/builder-content'
import OptionsButton from '../components/options-button/options-button'

function MyApp({ Component, pageProps }: AppProps) { 
  return (
    <Provider store={store}>
      <ChakraProvider>
          <Box overflow="Hidden" height="100vh">
          <PageMenu />
          <OptionsMenu>
            <OptionsButton />
          </OptionsMenu>
          <HeaderMenu />
          <BuilderBody>
            <BuilderContent />
          </BuilderBody>
        </Box>
      </ChakraProvider>
    </Provider>
  )
}

export default MyApp
