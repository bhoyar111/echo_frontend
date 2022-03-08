export default function validateCity(values) {
	let errors = {};
	if (!values.country_id) {
		errors.country_id = "Country Name is required";
	}
	if (!values.state_id) {
		errors.state_id = "State Name is required";
	}
	if (!values.city_name) {
		errors.city_name = "City Name is required";
	}
    return errors;
}