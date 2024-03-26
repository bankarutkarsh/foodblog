import { getFoods } from "../food.slice";
import foodService from "./food.service";
import { call, put } from "redux-saga/effects";

export function* foodHandler(action){
    let {data} = yield call(foodService, action.payload)
    if(data){
        yield put(getFoods(data))
    }
}