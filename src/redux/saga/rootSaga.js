import { all } from "redux-saga/effects";
import { foodWatcher } from "./food.watcher";


export function* rootSaga(){
    let watcherArray = [foodWatcher()]
    yield all(watcherArray);
}