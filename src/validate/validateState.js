export default function validateState(values) {
	let errors = {};
	if (!values.country_id) {
		errors.country_id = "Country Name is required";
	}
	if (!values.state_name) {
		errors.state_name = "State Name is required";
	}
    return errors;
}