import restaurantFood from '../assets/restauranfood.jpg';
import greekSalad from '../assets/greeksalad.jpg';
import bruschetta from '../assets/bruchetta.png';
import lemonDessert from '../assets/lemondessert.jpg';
import person1 from '../assets/person1.jpg';
import person2 from '../assets/person2.jpg';
import person3 from '../assets/person3.jpg';
import person4 from '../assets/person4.jpg';
import marioadrian from '../assets/marioadrian.jpg';
import chefB from '../assets/chef.jpg';

const Main = () => {
  return (
     <main>
        <section className="hero">
          <div className="hero-text">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
            <button>Reserve a table</button>
          </div>
          <div className="hero-image">
            <img src={restaurantFood} alt="Delicious food" />
          </div>
        </section>

        {/* Specials Section */}
        <section className="specials" id="menu">
          <div className='specials-header'>
          <h2>This week’s specials!</h2>
          <button className="specials-btn">Online menu</button>
          </div>
          <div className="specials-grid">
            <article className="card">
              <img src={greekSalad} alt="Greek Salad" />
              <div className="card-content">
                <h3>Greek Salad <span>$12.99</span></h3>
                <p>
                  Fresh salad with crispy lettuce, peppers, olives and feta
                  cheese, seasoned with herbs.
                </p>
                <a href="#order">Order a delivery</a>
              </div>
            </article>
            <article className="card">
              <img src={bruschetta} alt="Bruschetta" />
              <div className="card-content">
                <h3>Bruschetta <span>$5.99</span></h3>
                <p>
                  Toasted bread topped with garlic, tomatoes, and olive oil.
                </p>
                <a href="#order">Order a delivery</a>
              </div>
            </article>
            <article className="card">
              <img src={lemonDessert} alt="Lemon Dessert" />
              <div className="card-content">
                <h3>Lemon Dessert <span>$4.99</span></h3>
                <p>
                  Authentic homemade lemon dessert made fresh daily.
                </p>
                <a href="#order">Order a delivery</a>
              </div>
            </article>
          </div>
        </section>

        {/* Testimonials */}
        <section className="testimonials">
          <h2>Testimonials</h2>
          <div className="testimonials-grid">
            <article>
              <p>⭐⭐⭐⭐⭐</p>
              <img src={person1} alt="Person 1" />
              <h4>Anna Lee</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </article>
            <article>
              <p>⭐⭐⭐⭐⭐</p>
              <img src={person2} alt="Person 2" />
              <h4>David Smith</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </article>
            <article>
              <p>⭐⭐⭐⭐⭐</p>
              <img src={person3} alt="Person 3" />
              <h4>Diana Ross</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </article>
            <article>
              <p>⭐⭐⭐⭐⭐</p>
              <img src={person4} alt="Person 4" />
              <h4>Adam Price</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </article>
          </div>
        </section>

        {/* About Section */}
        <section className="about" id="about">
          <div className="about-text">
            <h2>Little Lemon</h2>
            <h3>Chicago</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="about-image">
            <img className='image1' src={marioadrian} alt="Mario and Adrian at Little Lemon" />
            <img className='image2' src={chefB} alt="Mario at Little Lemon" />
          </div>
        </section>
      </main>
  )
}

export default Main