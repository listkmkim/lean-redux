import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import ReduxThunk from "redux-thunk";
import rootReducer, { rootSaga } from "../modules";

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ReduxThunk, sagaMiddleware, logger),
});

sagaMiddleware.run(rootSaga);
