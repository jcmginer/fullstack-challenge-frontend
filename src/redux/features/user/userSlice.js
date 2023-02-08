import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name: "users",
    initialState: {
        isLogged: false,
        userLogged: null,
        list: [],
    },
    reducers: {
        setUserList: (state, action) => {
            state.list = action.payload;
        },
        setUserLogged: (state, action) => {
            state.userLogged = action.payload;
            state.isLogged = true;
        },
        setUserLogOut: (state) => {
            state.isLogged = false;
            state.userLogged = null;
        },
        registerUser: (state, action) => {
            state.list = [...state.list, action.payload];
        },
        setUserEdit: (state, action) => {
            state.userLogged = {
                ...state.userLogged,
                'userData': action.payload.userData
            }
        }

    }
});

export const { setUserList, setUserLogged, setIsLogged, setUserLogOut, registerUser, setUserEdit } = userSlice.actions;

export default userSlice.reducer;