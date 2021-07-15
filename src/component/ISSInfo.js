import { useSelector } from "react-redux";

const ISSInfo = () => {
	const issData = useSelector((state) => {
		const lastElement = state.iss.data.length - 1;
		return state.iss.data[lastElement];
	});

	return (
		<div>
			<p>Time: {issData?.timestamp || "N/A"}</p>
			<p>Latitude: {issData?.latitude || "N/A"}</p>
			<p>Longitude: {issData?.longitude || "N/A"}</p>
		</div>
	);
};

export default ISSInfo;
