import React from 'react';
import { useState, useEffect } from 'react';

const UseForm = (callback, validate) => {
	const [values, setValues] = useState({
		email: '',
		password: '',
		passconfirm: '',
	});
	const [errors, setErrors] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleChange = (event) => {
		const { name, value } = event.target;
		setValues({
			...values,
			[name]: value,
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setErrors(validate(values));
		setIsSubmitting(true);
	};

	useEffect(() => {
		if (Object.keys(errors).length === 0 && isSubmitting) return callback;
	}, [errors]);

	return {
		handleChange,
		handleSubmit,
		values,
		errors,
	};
};

export default UseForm;
