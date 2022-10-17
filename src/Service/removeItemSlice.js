import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    removeItem: true
}
export  const removeItemSlice = createSlice({
    name: "remove",
    initialState,
    reducers: {
removeItemSlice: (state,action) => {
    
}
    }
})
export default removeItemSlice.reducer;

