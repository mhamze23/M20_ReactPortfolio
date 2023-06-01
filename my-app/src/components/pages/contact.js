import React, { useState } from "react";
import '../../styles/style.css';
import { validateEmail } from "../../utils/helpers";

function Contact() {
	const [formState, setFormState] = useState({
		name: "",
		email: "",
		message: "",
	});
	
	const [errorMessage, setErrorMessage] = useState('');

	const { name, email, message } = formState;

	function handleInputChange(event) {
		const { name, value } = event.target;

		if (name === "email" && !validateEmail(value)) {
			setErrorMessage("Please enter a valid email address.");
		} else if (!value.length) {
			setErrorMessage(`${name.charAt(0).toUpperCase() + name.slice(1)} field cannot be empty.`);
		} else {
			setErrorMessage("");
			setFormState({ ...formState, [name]: value });
		}
	}

	function handleSubmit(event) {
		event.preventDefault();
		
	}

	return (
		<section className="contact-section">
			<h2 className="contact-header">Let's Connect!</h2>
			<form id="contact-form" onSubmit={handleSubmit}>
				<div className="form-field">
					<label htmlFor="name">Your Name</label>
					<input type="text" id="name" name="name" value={name} onChange={handleInputChange} required/>
				</div>
				<div className="form-field">
					<label htmlFor="email">Your Email</label>
					<input type="email" id="email" name="email" value={email} onChange={handleInputChange} required/>
				</div>
				<div className="form-field">
					<label htmlFor="message">Your Message</label>
					<textarea id="message" name="message" value={message} onChange={handleInputChange} required/>
				</div>
				{errorMessage && <p className="error-message">{errorMessage}</p>}
				<button type="submit" className="submit-btn">Submit</button>
			</form>
		</section>
	);
}

export default Contact;
