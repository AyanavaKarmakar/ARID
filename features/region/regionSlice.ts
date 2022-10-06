import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface RegionState {
  region: string
}

const initialState: RegionState = {
  region: 'West Bengal',
}

export const regionSlice = createSlice({
  name: 'region',
  initialState,
  reducers: {
    updateRegion: (state, action: PayloadAction<string>) => {
      state.region = action.payload
    },
  },
})

export const { updateRegion } = regionSlice.actions
export default regionSlice.reducer
