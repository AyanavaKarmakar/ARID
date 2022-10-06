import { configureStore } from '@reduxjs/toolkit'
import regionReducer from './features/region/regionSlice'

export const store = configureStore({
  reducer: {
    region: regionReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
