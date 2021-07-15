import { createSlice } from "@reduxjs/toolkit";

const issSlice = createSlice({
	name: "iss",
	initialState: {
		time: process.env.REACT_APP_INTERVAL_TIME,
		data: [],
		intervalToggle: false,
		failed: false,
	},
	reducers: {
		fetchSuccess: (state, { type, payload }) => {
			if (state.data.length >= 5) {
				state.data = [...state.data.slice(1), payload];
			} else {
				state.data = [...state.data, payload];
			}
			state.intervalToggle = true;
			state.failed = false;
		},
		fetchFailed: (state) => {
			state.intervalToggle = false;
			state.failed = true;
		},
		stop: (state) => {
			state.intervalToggle = false;
			state.failed = false;
		},
	},
});

// export const toggleIntervalOn = issSlice.actions.toggleIntervalOn;
// export const toggleIntervalOff = issSlice.actions.toggleIntervalOff;
export const fetchSuccess = issSlice.actions.fetchSuccess;
export const fetchFailed = issSlice.actions.fetchFailed;
// export const toggleData = issSlice.actions.toggleData;

export default issSlice.reducer;
