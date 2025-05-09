import React, { useState, useEffect } from "react";
import "./App.css";
import Login from "./login";
import Signup from "./signup";
import UpcyclingPage from "./UpcyclingPage";
import PurchaseTracker from "./purchasetracker";
import AboutUs from "./AboutUs";


const SustainableFashionGuide = () => {
  const [activeSection, setActiveSection] = useState("auth");
  const [authMode, setAuthMode] = useState(null);
  const [test, setTest] = useState([]);
  const [userEmail, setUserEmail] = useState(null);

  const goToHome = () => {
    setActiveSection("home");
    setAuthMode(null);
  };

  useEffect(() => {
    const fetchWebsite = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/products/bulk");
        const data = await response.json(
          
        );
        setTest(data);
      } catch (error) {
        console.error("Failed to fetch brand data:", error);
      }
    };
    fetchWebsite();
  }, []);

  const showAuthPrompt = () => (
    <div className="auth-container">
      <div className="auth-form">
        <h2>Welcome to TERRA</h2>
        <p>Please login or signup to continue.</p>
        <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
          <button onClick={() => setAuthMode("login")}>Login</button>
          <button onClick={() => setAuthMode("signup")}>Signup</button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container background-container">
      <nav className="navbar">
        <div className="nav-left">
          <img src="/my_logo.png" alt="Logo" className="logo-img" />
          <h1 className="logo-text">Terra</h1>
        </div>
        <div className="nav-right">
          <a href="#" onClick={() => setActiveSection("home")}>Home</a>
          <a href="#" onClick={() => setActiveSection("about")}>About</a>

          {userEmail ? (
            <span className="user-info">👤 {userEmail}</span>
          ) : (
            <>
              <button className="login-btn" onClick={() => setAuthMode("login")}>Login</button>
              <button className="login-btn" onClick={() => setAuthMode("signup")}>Signup</button>
            </>
          )}
        </div>
      </nav>

      <div className="content">
        {activeSection === "about" && <AboutUs />}

        {activeSection === "auth" && !authMode && showAuthPrompt()}
        {authMode === "login" && <Login goToHome={goToHome} setUserEmail={setUserEmail} />}
        {authMode === "signup" && <Signup goToHome={goToHome} setAuthMode={setAuthMode} />}

        {activeSection === "home" && (
          <>
            <header className="header">
              <h1 className="home-heading" style={{ color: "white" }}>🌿 Sustainable Fashion Guide</h1>

              <p className="home-subtext">Make eco-conscious fashion choices</p>
            </header>

            <section className="card-container">
              <div className="card" onClick={() => setActiveSection("shop")}>
              <h2 style={{ color: "black" }}>🛍 Shop</h2>
                <p>Buy eco-friendly and sustainable fashion items.</p>
              </div>
              <div className="card" onClick={() => setActiveSection("recycle")}>
                <h2 style={{ color: "black" }}>♻ Recycle</h2>
                <p>Recycle your old clothes responsibly.</p>
              </div>
              <div className="card" onClick={() => setActiveSection("upcycle")}>
                <h2 style={{ color: "black" }}>🧵 Upcycle</h2>
                <p>Watch DIY tutorials and upcycle your clothes.</p>
              </div>
              <div className="card" onClick={() => setActiveSection("tracker")}>
                <h2 style={{ color: "black" }}>📋 Purchase Tracker</h2>
                <p>Track your fashion impact and earn badges.</p>
              </div>
            </section>

            <section className="big-card-section">
              <div className="highlight-box">
                <h2>We are <span className="highlight">not (just)</span> a fashion guide.</h2>
                <p className="tagline">Fashion harms the planet. <span className="highlight-small">Not us. We heal it.</span></p>
              </div>
            </section>

            <section className="badge-section">
              <h2>🏆 Achieve Your Badges!</h2>
              <p style={{ color: "white", fontSize: "18px", fontWeight: "500", marginTop: "10px" }}>
              ♻ Recycle clothes, unlock badges, and redeem coupons!
              </p>

              <div className="badge-container">
                <div className="badge-card">
                  <h3>🌱 Green Shopper</h3>
                  <p>Buy eco-friendly fashion to earn this.</p>
                </div>
                <div className="badge-card">
                  <h3>♻ Upcycle Master</h3>
                  <p>Show off your creative transformations.</p>
                </div>
                <div className="badge-card">
                  <h3>🛒 Recycle Savvy</h3>
                  <p>Earned when you make your first thrift purchase.</p>
                </div>
              </div>
            </section>

            <section className="contact-section">
              <div className="contact-column">
                <h2>About Us</h2>
                <p>Company</p>
                <p>Blogs</p>
                <p>Sustainability</p>
                <p>Stores</p>
              </div>
              <div className="contact-column">
                <h2>Help</h2>
                <p>FAQS</p>
                <p>Privacy Policy</p>
              </div>
              <div className="contact-column">
                <h2>Contact</h2>
                <p>📧 terra@gmail.com</p>
              </div>
              <div className="contact-column">
                <h2>Follow Us</h2>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" className="social-icon" />
                </a>
              </div>
            </section>
          </>
        )}

        {activeSection === "shop" && (
          <div className="shop-page">
            <h1 style={{ color: "white" }}>🌱 Sustainable Brands</h1>
            <div className="brand-card-container">
              {test.map((brand, index) => (
                <div
                  key={index}
                  className="brand-card"
                  onClick={() => window.open(brand.website, "_blank")}
                >
                  <h3>{brand.name}</h3>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSection === "recycle" && (
          <div className="recycle-wrapper">
            <div className="recycle-form-container">
              <h2 className="recycle-title">♻ Recycle Your Clothes</h2>
              <form onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you! Your recycling request has been submitted.");
                e.target.reset();
              }}>
                <input type="text" name="name" placeholder="Name" required />
                <input type="tel" name="phone" placeholder="Phone Number" required />
                <input type="text" name="pincode" placeholder="Pincode" required />
                <input type="number" name="clothes" placeholder="Number of Clothes to Recycle" required />
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        )}

        {activeSection === "upcycle" && <UpcyclingPage />}
        {activeSection === "tracker" && <PurchaseTracker />}
      </div>
    </div>
  );
};

export default SustainableFashionGuide;
