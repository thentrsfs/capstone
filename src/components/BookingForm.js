import { useNavigate } from 'react-router-dom';
const BookingForm = ({
	formData,
	setFormData,
	availableTimes,
	dispatch,
	api
}) => {
	const navigate = useNavigate();
	const handleSubmit = (e) => {
		e.preventDefault();
		if(api.submitAPI(formData)){
			console.log("Booking confirmed", formData);
			navigate("/confirmed");
		} else {
			console.log("Booking failed", formData);
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className='booking-form'>
			<label htmlFor='res-date'>Choose date</label>
			<input
				value={formData.date}
				onChange={(e) => {
					setFormData({ ...formData, date: e.target.value });
					dispatch({ type: 'UPDATE_TIMES', date: e.target.value });
				}}
				type='date'
				id='res-date'
			/>
			<label htmlFor='res-time'>Choose time</label>
			<select
				id='res-time'
				value={formData.time}
				onChange={(e) => setFormData({ ...formData, time: e.target.value })}>
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
			/>
			<label htmlFor='occasion'>Occasion</label>
			<select
				id='occasion'
				value={formData.occasion}
				onChange={(e) =>
					setFormData({ ...formData, occasion: e.target.value })
				}>
				<option>Birthday</option>
				<option>Anniversary</option>
			</select>
			<input
				type='submit'
				value='Make Your reservation'
			/>
		</form>
	);
};

export default BookingForm;
