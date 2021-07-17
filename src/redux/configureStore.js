import { configureStore } from "@reduxjs/toolkit";
import issSliceReducer from "./issSlice";
import logger from "redux-logger";
import issMiddleware from "../reduxMiddleware/issMiddleware";


let middlewares = [issMiddleware]

if (process.env.NODE_ENV === `development`) {
	middlewares.push(logger);
}

export default configureStore({
	middleware: middlewares,
	reducer: {
		iss: issSliceReducer,
	},
});
