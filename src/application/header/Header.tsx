import { ChangeEvent, useContext } from 'react'
import styled from 'styled-components'
import { FiltersContext } from '../../store/FiltersContext'

const Wrapper = styled.header`
  background-color: aliceblue;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Header = () => {
  const { search, setSearch } = useContext(FiltersContext)

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const isValid = /^[a-z0-9]{0,10}$/i.test(event.target.value)
    if (!isValid) {
      return
    }
    setSearch(event.target.value)
  }

  return (
    <Wrapper>
      <span style={{ marginRight: 10 }}>Search:</span>
      <input value={search} onChange={handleOnChange} />
    </Wrapper>
  )
}

export default Header
