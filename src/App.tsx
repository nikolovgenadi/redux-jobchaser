import { useState } from 'react'
import styled from 'styled-components'
import Content from './application/content/Content'
import Footer from './application/footer/Footer'
import Header from './application/header/Header'
import { FiltersContext } from './store/FiltersContext'

const AppWrapper = styled.main`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: grid;
  grid-template-rows: 60px 1fr 60px;
`

const App = () => {
  const [search, setSearch] = useState<string>('')

  return (
    <FiltersContext.Provider value={{ search, setSearch }}>
      <AppWrapper>
        <Header />
        <Content />
        <Footer />
      </AppWrapper>
    </FiltersContext.Provider>
  )
}

export default App
