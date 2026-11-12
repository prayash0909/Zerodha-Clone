const features = [
  {
    title: "Free Equity Delivery",
    description:
      "All equity delivery investments are absolutely free. No brokerage charges.",
  },
  {
    title: "Intraday and F&O",
    description:
      "Trade stocks, futures and options with transparent brokerage charges.",
  },
  {
    title: "Direct Mutual Funds",
    description: "Invest in direct mutual funds without paying any commission.",
  },
  {
    title: "Advanced Trading",
    description:
      "Access powerful trading tools and platforms to manage your investments.",
  },
];

const stats = [
  { value: "1.6+ Crore", label: "Trusted clients" },
  { value: "₹0", label: "Equity delivery brokerage" },
  { value: "20+", label: "Years of experience" },
];

function Sections() {
  return (
    <>
      <section className="features" id="products">
        <h2>Investment opportunities for everyone</h2>

        <p className="features-subtitle">
          Simple, transparent and reliable investment platforms.
        </p>

        <div className="features-container">
          {features.map((feature) => (
            <div className="feature-card" key={feature.title}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="stats-section" id="about">
        <h2>Trusted by millions of investors</h2>

        <div className="stats-container">
          {stats.map((stat) => (
            <div className="stat-card" key={stat.label}>
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Sections;
