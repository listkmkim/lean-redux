import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import rootReducer from "../modules";

export default configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: (gdm) => gdm().concat(logger),
});
