import { useContext, useEffect, useState } from 'react'
import { FiltersContext } from '../../../store/FiltersContext'
import { User } from './types'

export const useUsers = () => {
  const [users, setUsers] = useState<User[] | null>(null)
  const [filteredUsers, setFilteredUsers] = useState<User[] | null>(null)
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { search } = useContext(FiltersContext)

  // Fetch users
  useEffect(() => {
    if (users) {
      return
    }

    setLoading(true)
    fetch('/userData.json')
      .then(async (response) => {
        const data = await response.json()
        setUsers(data)
        setError(null)
      })
      .catch((error) => {
        setError(error.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [users])

  // Filter users
  useEffect(() => {
    if (!users) {
      return
    }

    setFilteredUsers(
      users.filter(({ username, email }) =>
        new RegExp(search, 'i').test(username + (email || '')),
      ),
    )
  }, [users, search])

  return { users, filteredUsers, setUsers, error, isLoading }
}
