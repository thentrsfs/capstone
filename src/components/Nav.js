import logo from '../assets/lemon-logo.svg';

const Nav = () => {
  return (
   <nav className="navbar">
        <img src={logo} alt="logo" />
    <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Menu</a></li>
        <li><a href="/">Reservations</a></li>
        <li><a href="/">Order online</a></li>
        <li><a href="/">Login</a></li>
    </ul>
   </nav>
  )
}

export default Nav