import './App.css';
import { useState, useReducer, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import ConfirmedBooking from './pages/ConfirmedBooking';
import { loadApi } from './utils/loadApi';
import { updateTimes, initializeTimes } from './utils/times';

function App() {
  	const [formData, setFormData] = useState({
		date: '',
		time: '',
		guests: 1,
		occasion: 'Birthday',
	});
  const [formErrors, setFormErrors] = useState({
    date: '',
    time: '',
    guests: '',
    occasion: '',
  });
	const [api, setApi] = useState(null);
	 useEffect(() => {
    loadApi().then((loaded) => {
      setApi(loaded);
    });
  }, []);

  const [availableTimes, dispatch] = useReducer(updateTimes(api),[], initializeTimes(api));
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/booking' element={<BookingPage formData={formData} setFormData={setFormData} availableTimes={availableTimes} dispatch={dispatch} formErrors={formErrors} setFormErrors={setFormErrors} api={api}/>} />
		<Route path='/confirmed' element={<ConfirmedBooking />} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;
