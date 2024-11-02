

import { createContext } from 'react'

interface FiltersContext {
  search: string
  setSearch: React.Dispatch<React.SetStateAction<string>>
}

export const FiltersContext = createContext<FiltersContext>({
  search: '',
  setSearch: () => {},
})
