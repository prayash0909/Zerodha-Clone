const features = [
  {
    title: "Free Equity Delivery",
    description: "Invest in stocks with zero brokerage on delivery trades.",
  },
  {
    title: "Direct Mutual Funds",
    description: "Invest in direct mutual funds with zero commission.",
  },
  {
    title: "Advanced Trading Tools",
    description: "Use powerful tools to track and manage your investments.",
  },
];

function Sections() {
  return (
    <section className="features" id="products">
      <h2>Investment opportunities for everyone</h2>

      <div className="features-container">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Sections;
