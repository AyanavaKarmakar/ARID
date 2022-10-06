import { createContext } from 'react'

export const RegionContext = createContext({
  region: 'West Bengal',
  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
  setRegion: (newRegion: string) => {},
})
