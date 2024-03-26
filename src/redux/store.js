import { configureStore } from "@reduxjs/toolkit";
import foodSlice from "./food.slice";
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from "./saga/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        food: foodSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga)

export default store;