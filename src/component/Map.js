import mapStyles from "../mapStyles";
import { GoogleMap } from "@react-google-maps/api";
import ISSMarker from "./ISSMarker";

const mapContainerStyle = {
	width: "100vw",
	height: "75vh",
};

// override google maps styles
const options = {
	styles: mapStyles,
	disableDefaultUI: true, // removes all the default controls like satelite and person
	zoomControl: true, // recall back the zoom control
};

const Map = ({ onLoad }) => {
	return (
		<div>
			<GoogleMap
				mapContainerStyle={mapContainerStyle}
				zoom={1.25}
				center={{
					lat: 26.3351,
					lng: 17.2283,
				}}
				options={options}
				onLoad={onLoad}
			>
				<ISSMarker />
			</GoogleMap>
		</div>
	);
};

export default Map;
