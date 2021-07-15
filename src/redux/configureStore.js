import { configureStore } from "@reduxjs/toolkit";
import issSliceReducer from "./issSlice";
import logger from "redux-logger";
import issMiddleware from "../reduxMiddleware/issMiddleware";

export default configureStore({
	middleware: [issMiddleware, logger],
	reducer: {
		iss: issSliceReducer,
	},
});
