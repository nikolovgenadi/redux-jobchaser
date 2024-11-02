import styled from 'styled-components'
import UserList from './user-list/UserList'

const Wrapper = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
`

const Content = () => {
  return (
    <Wrapper>
      <UserList />
    </Wrapper>
  )
}

export default Content
