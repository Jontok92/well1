import { createSlice } from "@reduxjs/toolkit";

export const accountDetails = createSlice({
    name:"pharse",
    initialState : {
        pharse:"",
        create:"",
        email:"",
        password:"",
    },
    reducers : {
        setPharse : (state,action )=> {
            state.pharse = action.payload;
        },
        setCreate : (state,action )=> {
            state.create = action.payload;
        },
        setEmails : (state,action )=> {
            state.email = action.payload;
        },
        setPasswords : (state,action )=> {
            state.password = action.payload;
        },
    }
})

export const {setPharse ,setCreate,setPasswords ,setEmails} = accountDetails.actions;

export default accountDetails.reducer;