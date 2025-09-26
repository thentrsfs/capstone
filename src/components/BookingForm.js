import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
const BookingForm = ({
	formData,
	setFormData,
	availableTimes,
	dispatch,
	formErrors,
	setFormErrors,
	api
}) => {
	const navigate = useNavigate();
	const validateForm = () => {
		const { date, time, guests, occasion } = formData;
		let errors = {};
		if(!date) {
			errors.date = "Date is required";
		}
		if(!time) {
			errors.time = "Time is required";
		}
		if(!guests || guests < 1 || guests > 10) {
			errors.guests = "Number of guests must be between 1 and 10";
		}
		if(!occasion) {
			errors.occasion = "Occasion is required";
		}
		setFormErrors(errors);
		return Object.keys(errors).length === 0;
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		if(api.submitAPI(formData) && validateForm()) {
			console.log("Booking confirmed", formData);
			navigate("/confirmed");
		} else {
			console.log("Booking failed", formData);
		}
	};
	useEffect(() => {
		validateForm();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [formData]);
	useEffect(() => {
		if(availableTimes.length > 0) {
			if(!availableTimes.includes(formData.time)) {
				setFormData({ ...formData, time: availableTimes[0] });
			}
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [availableTimes]);
	return (
		<form
			onSubmit={handleSubmit}
			className='booking-form'>
			<label htmlFor='res-date'>Choose date</label>
			<input
				value={formData.date}
				onChange={(e) => {
					const newDate = e.target.value;
					setFormData({ ...formData, date: newDate });
					dispatch({ type: 'UPDATE_TIMES', date: newDate });
				}}
				min={new Date().toISOString().split('T')[0]}
				type='date'
				id='res-date'
				required
				aria-label='Choose date'
			/>
			<label htmlFor='res-time'>Choose time</label>
			<select
				id='res-time'
				value={formData.time}
				onChange={(e) => setFormData({ ...formData, time: e.target.value })}
				required
				aria-label='Choose time'>
				{availableTimes.map((time) => (
					<option
						key={time}
						value={time}>
						{time}
					</option>
				))}
			</select>
			<label htmlFor='guests'>Number of guests</label>
			<input
				value={formData.guests}
				onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
				type='number'
				placeholder='1'
				min='1'
				max='10'
				id='guests'
				className={formErrors.guests ? 'input-error' : ''}
				required
				aria-label='Number of guests'
			/>
			<label htmlFor='occasion'>Occasion</label>
			<select
				id='occasion'
				value={formData.occasion}
				onChange={(e) =>
					setFormData({ ...formData, occasion: e.target.value })
				}
				aria-label='Occasion'>
				<option defaultChecked>Birthday</option>
				<option>Anniversary</option>
			</select>
			<input
			    disabled={Object.keys(formErrors).length > 0}
				type='submit'
				value='Make Your reservation'
				required
				aria-label='Make your reservation'
			/>
		</form>
	);
};

export default BookingForm;
