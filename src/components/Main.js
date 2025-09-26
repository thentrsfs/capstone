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
        <section className="hero" aria-labelledby='hero-heading'>
          <article aria-label='Hero text' className="hero-text">
            <h1 id='hero-heading'>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
            <button>Reserve a table</button>
          </article>
          <figure className="hero-image">
            <img src={restaurantFood} alt="Delicious food" />
          </figure>
        </section>

        {/* Specials Section */}
        <section className="specials" id="menu" aria-labelledby='specials-heading'>
          <header aria-label='Specials header' className='specials-header'>
          <h2 id='specials-heading'>This week’s specials!</h2>
          <button className="specials-btn">Online menu</button>
          </header>

          <ul className="specials-grid">
            <li className="card">
              <figure>
              <img src={greekSalad} alt="Greek Salad" />
              <figcaption className="card-content">
                <h3>Greek Salad <span>$12.99</span></h3>
                <p>
                  Fresh salad with crispy lettuce, peppers, olives and feta cheese, seasoned with herbs.
                </p>
                <a href="#order">Order a delivery</a>
              </figcaption>
              </figure>
            </li>
            <li className="card">
              <figure>
              <img src={bruschetta} alt="Bruschetta" />
              <figcaption className="card-content">
                <h3>Bruschetta <span>$5.99</span></h3>
                <p>
                  Toasted bread topped with garlic, tomatoes, and olive oil.
                </p>
                <a href="#order">Order a delivery</a>
              </figcaption>
              </figure>
            </li>
            <li className="card">
              <figure>
              <img src={lemonDessert} alt="Lemon Dessert" />
              <figcaption className="card-content">
                <h3>Lemon Dessert <span>$4.99</span></h3>
                <p>
                  Authentic homemade lemon dessert made fresh daily.
                </p>
                <a href="#order">Order a delivery</a>
              </figcaption>
              </figure>
            </li>
          </ul>
        </section>

        {/* Testimonials */}
      <section className="testimonials" aria-labelledby="testimonials-heading">
  <h2 id="testimonials-heading">Testimonials</h2>
  <ul className="testimonials-grid">
    <li>
      <figure>
        <span role="img" aria-label="5 star rating">⭐⭐⭐⭐⭐</span>
        <img src={person1} alt="Portrait of Anna Lee" />
        <figcaption>
          <h3>Anna Lee</h3>
          <blockquote>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </blockquote>
        </figcaption>
      </figure>
    </li>
    <li>
      <figure>
        <span role="img" aria-label="5 star rating">⭐⭐⭐⭐⭐</span>
        <img src={person2} alt="Portrait of David Smith" />
        <figcaption>
          <h3>David Smith</h3>
          <blockquote>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </blockquote>
        </figcaption>
      </figure>
    </li>
    <li>
      <figure>
        <span role="img" aria-label="5 star rating">⭐⭐⭐⭐⭐</span>
        <img src={person3} alt="Portrait of Diana Ross" />
        <figcaption>
          <h3>Diana Ross</h3>
          <blockquote>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </blockquote>
        </figcaption>
      </figure>
    </li>
    <li>
      <figure>
        <span role="img" aria-label="5 star rating">⭐⭐⭐⭐⭐</span>
        <img src={person4} alt="Portrait of Adam Price" />
        <figcaption>
          <h3>Adam Price</h3>
          <blockquote>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </blockquote>
        </figcaption>
      </figure>
    </li>
  </ul>
</section>


        {/* About Section */}
        <section className="about" id="about" aria-labelledby="about-heading">
          <article className="about-text">
            <h2 id="about-heading">Little Lemon</h2>
            <h3>Chicago</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </article>
          <div className="about-image">
            <figure>
            <img className='image1' src={marioadrian} alt="Mario and Adrian at Little Lemon" />
            </figure>
            <figure>
            <img className='image2' src={chefB} alt="Mario at Little Lemon" />
            </figure>
          </div>
        </section>
      </main>
  )
}

export default Main