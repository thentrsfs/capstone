import restaurant from '../assets/restaurant.jpg';

const Footer = () => {
  return (
    <footer>
      <div className="footer-grid">
        <figure>
          <img src={restaurant} alt="Little Lemon restaurant exterior" />
        </figure>

        <div className="footer-info">
          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <h4>Doormat Navigation</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#menu">Menu</a></li>
              <li><a href="/reservations">Reservations</a></li>
              <li><a href="/order">Order Online</a></li>
              <li><a href="/login">Login</a></li>
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h4>Contact</h4>
            <address>
              <p>123 Main Street, Chicago, IL</p>
              <p><a href="tel:+11234567890">(123) 456-7890</a></p>
              <p><a href="mailto:info@littlelemon.com">info@littlelemon.com</a></p>
            </address>
          </div>

          {/* Social Media */}
          <div>
            <h4>Social Media Links</h4>
            <ul>
              <li><a href="https://facebook.com">Facebook</a></li>
              <li><a href="https://instagram.com">Instagram</a></li>
              <li><a href="https://twitter.com">Twitter</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
