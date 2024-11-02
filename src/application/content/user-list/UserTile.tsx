import styled from 'styled-components'
import { User } from './types'

const Wrapper = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #a4e7e7;
  flex-direction: column;
  border-top-left-radius: 15px;
  border-bottom-right-radius: 15px;
`

interface Props {
  user: User
}

const UserTile: React.FC<Props> = ({ user }) => {
  const { username, email } = user
  return (
    <Wrapper>
      <div>{username}</div>
      {email && <div>{email}</div>}
    </Wrapper>
  )
}

export default UserTile
