import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking', // 'not', 'auth,
        uid: null,
        email: null,
        displayName: null,
        photoURL: null,
        errorMessage: null,
    },
    reducers: {
        login: (state, action) => {
            state.status = 'auth'; // 'not'; 'auth;
            state.uid =  action.payload.uid;
            state.email =  action.payload.email;
            state.displayName =  action.payload.displayName;
            state.photoURL = action.payload.photoURL;
            state.errorMessage = action.payload.errorMessage;
            state.error = action.payload.error;


        },
        logout: (state, action) => {
            state.status = 'not'; // 'not'; 'auth;
            state.uid = null;
            state.email = null;
            state.displayName = null;
            state.photoURL = null;
            state.errorMessage = action.payload?.errorMessage;

        },
        chekingCredentials: (state, action) => {
            state.status = 'checking'

        }
    }
});


// Action creators are generated for each case reducer function
export const { login, logout, chekingCredentials } = authSlice.actions;