import { createSlice } from "@reduxjs/toolkit";


const foodSlice = createSlice({
    name: "foodSlice",
    initialState: {
        foods: [],
    },
    reducers: {
        getFoodsData(){},
        getFoods(state,action){
            state.foods = action.payload
        },
    }
})

export default foodSlice;
export let {getFoods,getFoodsData} = foodSlice.actions;