import React, { useEffect, useState } from "react";
import "./Home.css";

const slides = [
  {
    id: 1,
    image: "/slide1.jpg",
    titleTop: "Custom wholesale",
    titleMiddle1: "Jam",
    titleMiddle2: "and",
    titleMiddle3: "Jelly",
    titleBottom: "from Tasty Daily Farm",
    subtitle: "Tastes Like Old Times",
    buttonText: "Shop Now",
  },
  {
    id: 2,
    image: "/slide2.jpg",
    titleTop: "Big Sales Every",
    titleMiddle1: "Friday for our",
    titleMiddle2: "Products",
    titleMiddle3: "",
    titleBottom: "",
    subtitle: "Don’t Miss Discounts!",
    buttonText: "Shop Now",
  },
  {
    id: 3,
    image: "/home.jpg",
    titleTop: "Fresh Grocery",
    titleMiddle1: "Delivered",
    titleMiddle2: "Fast",
    titleMiddle3: "",
    titleBottom: "to Your Home",
    subtitle: "Healthy food for every day",
    buttonText: "Explore Now",
  },
];

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section className="hero-slider">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`hero-slide ${index === currentSlide ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="hero-overlay"></div>

          <div className="hero-inner">
            <div className={`hero-content ${index === currentSlide ? "show" : ""}`}>
              <span className="hero-badge">Farm Fresh • Premium Quality</span>

              <h1 className="hero-title">
                <span>{slide.titleTop}</span>

                <span>
                  {slide.titleMiddle1.includes("Jam") ? (
                    <>
                      <span className="highlight">{slide.titleMiddle1}</span>{" "}
                      {slide.titleMiddle2}{" "}
                      <span className="highlight">{slide.titleMiddle3}</span>
                    </>
                  ) : slide.titleMiddle2 === "Products" ? (
                    <>
                      {slide.titleMiddle1}
                      <br />
                      <span className="highlight">{slide.titleMiddle2}</span>
                    </>
                  ) : (
                    <>
                      {slide.titleMiddle1}{" "}
                      <span className="highlight">{slide.titleMiddle2}</span>
                    </>
                  )}
                </span>

                {slide.titleBottom && <span>{slide.titleBottom}</span>}
              </h1>

              <p className="hero-subtitle">{slide.subtitle}</p>

              <div className="hero-actions">
                <button className="hero-btn">{slide.buttonText}</button>
                <button className="hero-btn secondary-btn">View Deals</button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button className="slider-arrow left-arrow" onClick={prevSlide}>
        &#8592;
      </button>

      <button className="slider-arrow right-arrow" onClick={nextSlide}>
        &#8594;
      </button>

      <div className="slider-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`slider-dot ${index === currentSlide ? "active-dot" : ""}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default HomePage;