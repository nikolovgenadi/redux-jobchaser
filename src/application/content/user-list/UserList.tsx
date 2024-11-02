import styled from 'styled-components'
import { useUsers } from './hooks'
import UserTile from './UserTile'

const Wrapper = styled.div`
  display: flex;
  gap: 16px;
  padding: 16px;
`

const UserList = () => {
  const { filteredUsers, isLoading, error } = useUsers()

  if (error) {
    return <div>error message: {error}</div>
  }

  if (isLoading || !filteredUsers) {
    return <div>loading...</div>
  }

  return (
    <Wrapper>
      {!filteredUsers.length && <div>No users founds</div>}
      {!!filteredUsers.length &&
        filteredUsers.map((user) => (
          <UserTile key={user.username} user={user} />
        ))}
    </Wrapper>
  )
}

export default UserList
