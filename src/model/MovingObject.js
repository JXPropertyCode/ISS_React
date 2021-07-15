// import moment from "moment";

// const convertTime = (givenTimeStamp) => {
// 	if (givenTimeStamp !== null) {
// 		return moment.unix(givenTimeStamp).format("MM/DD/YY hh:mm:ss a");
// 	}
// };

class MovingObject {
	latitude;
	longitude;
	timestamp;

	constructor(timestamp, latitude, longitude) {
		this.timestamp = String(timestamp);
		this.latitude = Number(latitude);
		this.longitude = Number(longitude);
	}
}

export default MovingObject;
