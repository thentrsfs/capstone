import restaurant from '../assets/restaurant.jpg';

const Footer = () => {
  return (
    <footer>
     <div className="footer-grid">
        <img src={restaurant} alt="restaurant" />
        <div className="footer-info">
          <div>
            <h4>Doormat Navigation</h4>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Menu</li>
              <li>Reservations</li>
              <li>Order Online</li>
              <li>Login</li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <p>Address</p>
            <p>Phone number</p>
            <p>Email</p>
          </div>
          <div>
            <h4>Social Media Links</h4>
            <p>Address</p>
            <p>Phone number</p>
            <p>Email</p>
          </div>
        </div>
        </div>
    </footer>
  )
}

export default Footer