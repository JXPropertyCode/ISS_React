import "./App.css";
import { useDispatch } from "react-redux";
import { useEffect, useRef, useCallback } from "react";
import ISSInfo from "./component/ISSInfo";
import ISSDataButton from "./component/ISSDataButton";
import Map from "./component/Map";
import { useLoadScript } from "@react-google-maps/api";

// These const variables are to pass into the Google Maps components to prevent re-rendering
// if they are variables it prevents re-render, since if not, React will think it changed so it re-renders
const libraries = ["places"];

function App() {
	const dispatch = useDispatch();

	const { isLoaded, loadError } = useLoadScript({
		googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
		libraries,
	});

	// retain the ref to its map instance
	const mapRef = useRef(null);

	// callback when the map loads, so you can assign to the ref to be used later to prevent rerenders
	const onMapLoad = useCallback((map) => {
		// console.log("onMapLoad Executed:", onMapLoad);
		mapRef.current = map;
	}, []);

	useEffect(() => {
		return () => dispatch({ type: "STOP_FETCH_ISS" });
	}, [dispatch]);

	if (loadError) return <h1>Error Loading Maps</h1>;
	if (!isLoaded) return <h1>Loading Maps</h1>;

	return (
		<div className="App">
			<ISSDataButton />
			<ISSInfo />
			<Map onLoad={onMapLoad} />
		</div>
	);
}

export default App;
