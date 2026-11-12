function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Invest in everything</h1>

        <p>
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>

        <a href="#signup" className="hero-button">
          Sign up now
        </a>
      </div>

      <div className="hero-image">
        <img
          src="https://zerodha.com/static/images/landing.png"
          alt="Zerodha trading platform"
        />
      </div>
    </section>
  );
}

export default Hero;
