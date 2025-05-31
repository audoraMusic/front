import { createSlice } from '@reduxjs/toolkit';

export interface AuthState {
  value: boolean
}

const initialState: AuthState = {
  value: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signIn: (state) => {
        state.value = true
    },
    signOut: (state) => {
        state.value = false
    }
  },
})

// Action creators are generated for each case reducer function
export const { signIn, signOut } = authSlice.actions

export default authSlice.reducer