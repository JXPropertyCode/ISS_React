import { Marker } from "@react-google-maps/api";
import { useSelector } from "react-redux";
const ISSMarker = () => {
	// this is for single markers
	// const issData = useSelector((state) => {
	// 	const lastElement = state.iss.data.length - 1;
	// 	return state.iss.data[lastElement];
	// });

	// if (issData === undefined) {
	// 	return null;
	// }

	// return (
	// 	<Marker
	// 		key={issData.timestamp}
	// 		position={{
	// 			lat: issData.latitude,
	// 			lng: issData.longitude,
	// 		}}
	// 		icon={{
	// 			url: "/iss.svg",
	// 			scaledSize: new window.google.maps.Size(50, 50),
	// 		}}
	// 	/>
	// );

	// for the markers to show its path and its opacity
	const issData = useSelector((state) => {
		return state.iss.data;
	});

	return (
		<>
			{issData.map((data, i, { length: n }) => {
				return (
					<Marker
						key={data.timestamp}
						opacity={(i + 1) / n}
						position={{
							lat: data.latitude,
							lng: data.longitude,
						}}
						icon={{
							url: "/iss.svg",
							scaledSize: new window.google.maps.Size(50, 50),
						}}
					/>
				);
			})}
		</>
	);
};

export default ISSMarker;
