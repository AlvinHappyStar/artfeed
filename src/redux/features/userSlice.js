import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  role: null,
}

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setUser: (state, action) => {
      console.log("setUser", action.payload)
      state.user = action.payload.user
      state.role = action.payload.role
    }
  },
})

export default userSlice.reducer

export const { setUser } = userSlice.actions