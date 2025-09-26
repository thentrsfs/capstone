import BookingForm from "../components/BookingForm"
import Header from "../components/Header"
import Footer from "../components/Footer"

const BookingPage = ({formData,setFormData, availableTimes,dispatch,formErrors,setFormErrors, api}) => {
  return (
    <>
        <Header />
        <BookingForm formData={formData} setFormData={setFormData} availableTimes={availableTimes} dispatch={dispatch} formErrors={formErrors} setFormErrors={setFormErrors} api={api} />
        <Footer />
    </>
  )
}

export default BookingPage