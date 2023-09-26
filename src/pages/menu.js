import { useRef, useEffect } from "react";

// Import components
import Footer from "../components/Footer/Footer";
import Navigation from "../components/Navigation/Navigation";
import PageBanner from "../components/PageBanner/PageBanner";

// Import GSAP
import { gsap, Power4 } from "gsap";

// Import SASS file
import styles from "../styles/Menu.module.scss";

function Menu() {
  // Refs
  let section = useRef(null);

  let tl = gsap.timeline({ delay: 0.3 });

  // GSAP animation
  useEffect(() => {
    // Section Animation
    tl.from(
      section.children,
      {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: Power4.easeOut,
      },
      0.2
    );
  }, [tl]);

  return (
    <>
      <Navigation />
      <PageBanner />

      <div className={styles.pageContent} ref={(e) => (section = e)}>
        <h2>Our Menu</h2>
        <hr className={styles.divider} />

        {/* Top Menu Container */}
        <div className={styles.topContainer}>
          {/* Soup & Salad Container */}
          <div className={styles.topLContainer}>
            <div className={styles.containerTitle}>
              <h4>Green Chilli Chicken Tortiglioni</h4>
              <p>Creamy Rigatoni with chicken tomatoes and basil</p>
            </div>
            <div>
              <h5>Surf & Turf Pasta Bake</h5>
              <p>
                Layers of shrimp and beef pasta bake with cream cheese and
                tomatoes
              </p>
              <br />

              <h5>
                RainForest Jambalaya <span>(Spicy)</span>
              </h5>
              <p>
                Rice cooked om delicious tomato sauce served with a mix of
                seafood and meat
              </p>
              <br />

              <h5>Chicken Parmigiana</h5>
              <p>
                Beef battered chicken served with crispy Ham and tomato sauce
              </p>
              <br />

              <h5>Napolitana</h5>
              <p>Spicy Napolitan sauce with shrimp</p>
              <br />

              <h5>Pho</h5>
              <p>Rice noodles, Beef slices, pickled eggs, bok choi</p>

              <br />
            </div>
          </div>

          {/* Pasta Container */}
          <div className={styles.topRContainer}>
            <div className={styles.containerTitle}>
              <h4>Chicken Piccatta</h4>
              <p>Crispy chicken with lemon and capers</p>
            </div>
            <div>
              <h5>Miso Ribeye</h5>
              <p>Miso stir fried ribeye with vegetables and mushrooms</p>
              <br />

              <h5>Short Ribs</h5>
              <p>Cafe braised boneless beef ribs</p>
              <br />

              <h5>Chicken</h5>
              <p>Green peas, butter peas, broccoli & chicken jus</p>
              <br />

              <h5>Lamb Leg Roast</h5>
              <p>Lamb roast, mashed potatoes, mushrooms & steamed vegetables</p>
              <br />

              <h5>Tomahawk</h5>
              <p>Chicken fried steaks, garden salad & steamed vegetables</p>
              <br />

              {/* <h5>Riverine Soup (Full)</h5>
              <p>
                Periwinkle, prawns, shrimps, fish, slice snails, scent leaf,
                cooked with flavored spices, served with poundo yam.
              </p> */}
              <br />
            </div>
          </div>
        </div>

        {/* Bottom Menu Container
        <div className={styles.bottomContainer}>
          {/* Panini Container
          <div className={styles.bottomLContainer}>
            <div className={styles.containerTitle}>
              <h4>Owambe (Jollof rice)</h4>
              {/* <p>
                served with mixed greens salad, cup of soup, or roasted
                vegetables
              </p> 
            </div>
            <div>
              <h5> Plain Basmati Rice</h5>
              {/* <p>
                Grilled eggplant, toamto, basil, mozzarella, balsamic vinegar
                <span>(10)</span>
              </p>
              <br />

              <h5>Mashed Asaro</h5>
              {/* <p>
                Turkey breast, avocado, tomato, organic spring mix{" "}
                <span>(8)</span>
              </p> 
              <br />

              <h5>Lamb Chops</h5>
              <p>
                Grilled Marinated Lamb Chops, With A Side Of Choice, Slav Peri
                Peri Sweet Chill Jam, Parsley.
              </p>
              <br />

              <h5>Watermelon & Cucumber Juice</h5>
              <p>1/2 Pc watermelon/1 cucumber</p>
              <br />

              <h5>Margarita Pizza (Regular)</h5>
              <p>Tomato sauce, cheese and oregano</p>
              <br />
            </div>
          </div>

          Pizza Container
          <div className={styles.bottomRContainer}>
            <div className={styles.containerTitle}>
              <h4>Bistro Splash Juice</h4>
              <p>Cucumber, Celery, Apple, mint leaf, Pineapple</p>
            </div>
            <div>
              <h5>Bistro Starter Smoothie</h5>
              <p>Apple, Banana, Sweet Pear, Pineapple & Watermelon</p>
              <br />
              <h5> Catfish Pepper Soup</h5>
              <br />
              <h5>Strawberry Lemonde</h5>
              Strawberry Syrup, Lemon Juice, Sugar Syrups, Sparkling Water
              <br />
              <h5>Pineapple Parfait</h5>
              <p>Pineapple, Apple, Grapes, Berries and Low fat Yoghurt</p>
              <br />
              <h5>Lagos Beet Vibe</h5>
              <p>Beetroot, Yoghurt red apple, banana, Pineapple Smoothie</p>
              <br />
              <h5>Amazonia Restaurant Special</h5>
              <p>Spinach Banana, Green Apple, Celery Smoothie</p>
              <br />
            </div>
          </div>  */}
        {/* </div> */}
      </div>

      <Footer />
    </>
  );
}

export default Menu;
