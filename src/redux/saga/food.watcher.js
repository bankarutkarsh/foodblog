import { takeLatest } from "redux-saga/effects";
import { getFoodsData } from "../food.slice";
import { foodHandler } from "./food.handler";


export function* foodWatcher(){
    yield takeLatest(getFoodsData.type,foodHandler)
}