import BookingForm from "../components/BookingForm"
import Header from "../components/Header"
import Footer from "../components/Footer"

const BookingPage = ({formData,setFormData, availableTimes,dispatch,api}) => {
  return (
    <>
        <Header />
        <BookingForm formData={formData} setFormData={setFormData} availableTimes={availableTimes} dispatch={dispatch} api={api} />
        <Footer />
    </>
  )
}

export default BookingPage