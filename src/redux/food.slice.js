import { createSlice } from "@reduxjs/toolkit";


const foodSlice = createSlice({
    name: "foodSlice",
    initialState: {
        foods: [],
        selected: null
    },
    reducers: {
        getFoodsData(){},
        getFoods(state,action){
            state.foods = action.payload
        },
        setSelected(state,action){
            state.selected = action.payload
        }
    }
})

export default foodSlice;
export let {getFoods,getFoodsData,setSelected} = foodSlice.actions;