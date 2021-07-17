import axios from "axios";
import MovingObject from "../model/MovingObject";

let interval = null;

const issMiddleware = (store) => (next) => (action) => {
	const state = store.getState();
	const time = state.iss.time;

	if (action.type === "FETCH_ISS") {
		interval = setInterval(() => {
			axios
				.get(process.env.REACT_APP_ISS_SERVER_URL)
				.then((res) => {
					// console.log("res.data:", res.data[0])
					let data = res.data[0];
					let convertData = new MovingObject(
						data.timestamp,
						data.lat,
						data.lng
					);
					// console.log("convertData:", convertData);
					next({ type: "iss/fetchSuccess", payload: convertData });
				})
				.catch((e) => {
					console.log("Error:", e);
					clearInterval(interval);
					next({ type: "iss/fetchFailed" });
				});
		}, time);
		return;
	}

	if (action.type === "iss/stop") {
		clearInterval(interval);
		next(action);
		return;
	}
	// continue to the next middleware, if no more then go to reducer
	next(action);
};

export default issMiddleware;
