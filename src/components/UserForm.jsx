import { Button, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react';
import { useState } from 'react';

export default function UserForm() {
	// once the value store inside a state changes, the component
	// has to rerender in order for the changes to reflect
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		phone: '',
	});

	const handleInputChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const onSubmit = (e) => {
		e.preventDefault();

		console.log(formData);
	};

	return (
		<form onSubmit={onSubmit}>
			<Stack>
				<FormControl>
					<FormLabel>First name</FormLabel>
					<Input
						required
						name="firstName"
						placeholder="John"
						onChange={handleInputChange}
					/>
				</FormControl>
				<FormControl>
					<FormLabel>Last name</FormLabel>
					<Input
						required
						name="lastName"
						placeholder="Doe"
						onChange={handleInputChange}
					/>
				</FormControl>
				<FormControl>
					<FormLabel>Phone number</FormLabel>
					<Input
						required
						name="phone"
						placeholder="0712345678"
						onChange={handleInputChange}
					/>
				</FormControl>

				<Button type="submit">Submit</Button>
			</Stack>
		</form>
	);
}
