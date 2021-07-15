import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

const ISSDataButton = () => {
	const dispatch = useDispatch();
	const issToggle = useSelector((state) => state.iss.intervalToggle);
	const failed = useSelector((state) => state.iss.failed);
	const time = useSelector((state) => state.iss.time);
	const [buttonText, setButtonText] = useState(
		"Get Data Every " + time / 1000 + " Seconds"
	);
	const [loading, setLoading] = useState(false);

	// if failed to get data when called
	if (failed) {
		return <button disabled={true}>Cannot Get Data, Refresh and Try Again</button>;
	}

	if (issToggle) {
		return (
			<button
				onClick={() => {
					setButtonText(`Get Data Every ${time / 1000} Seconds`);
					setLoading(false);
					dispatch({ type: "iss/stop" });
				}}
			>
				Stop Data
			</button>
		);
	}

	return (
		<button
			onClick={() => {
				setButtonText("Loading Data...");
				setLoading(true);
				dispatch({ type: "FETCH_ISS" });
			}}
			disabled={loading}
		>
			{buttonText}
		</button>
	);
};

export default ISSDataButton;
