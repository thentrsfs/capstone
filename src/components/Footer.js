import restaurant from '../assets/restaurant.jpg';

const Footer = () => {
  return (
    <footer>
        <img src={restaurant} alt="restaurant" width={180} />
     <label>Doormat Navigation</label>
         <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Menu</a></li>
        <li><a href="/">Reservations</a></li>
        <li><a href="/">Order online</a></li>
        <li><a href="/">Login</a></li>
    </ul>
    <label>Contact</label>
     <ul>
        <li><a href="/">Address</a></li>
        <li><a href="/">Phone number</a></li>
        <li><a href="/">Email</a></li>
    </ul>
    <label>Social Media Links</label>
     <ul>
        <li><a href="/">Address</a></li>
        <li><a href="/">Phone number</a></li>
        <li><a href="/">Email</a></li>
    </ul>
    </footer>
  )
}

export default Footer