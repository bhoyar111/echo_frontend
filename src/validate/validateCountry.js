export default function validateCountry(values) {
	let errors = {};
	if (!values.country_name) {
		errors.country_name = "Country Name is required";
	}
    return errors;
}