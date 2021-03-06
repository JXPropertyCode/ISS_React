import moment from "moment";

const convertTime = (givenTimeStamp) => {
	// console.log("givenTimeStamp:", givenTimeStamp);
	return moment.unix(givenTimeStamp).format("MM/DD/YY hh:mm:ss a");
};

class MovingObject {
	latitude;
	longitude;
	timestamp;

	constructor(timestamp, latitude, longitude) {
		this.timestamp = String(convertTime(timestamp));
		this.latitude = Number(latitude);
		this.longitude = Number(longitude);
	}
}

export default MovingObject;
