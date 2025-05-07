import React, { useState } from "react";
import "./App.css";

const brands = [
  { name: "No Nasties", website: "https://www.nonasties.in/" },
  { name: "Nicobar", website: "https://www.nicobar.com/" },
  { name: "Doodlage", website: "https://doodlage.in/" },
  { name: "The Summer House", website: "https://thesummerhouse.in/" },
  { name: "Renge", website: "https://www.renge.co.in/" },
  { name: "Okhai", website: "https://www.okhai.org/" },
  { name: "Maati by Neha Kabra", website: "https://maati.in/" },
  { name: "B Label", website: "https://blabel.in/" },
  { name: "Jodi Life", website: "https://thejodilife.com/" },
  { name: "PAIO", website: "https://www.paio.co.in/" },
  { name: "Zouk", website: "https://zouk.co.in/" },
  { name: "Mistry", website: "https://mistry.in/" },
  { name: "Arture", website: "https://arture.in/" },
  { name: "Monkstory", website: "https://monkstory.com/" },
  { name: "Amala Earth", website: "https://amala.earth/" },
  { name: "Outhouse", website: "https://outhouse-jewellery.com/" },
];

const SustainableFashionGuide = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [searchQuery, setSearchQuery] = useState("");
  const [contactInfo, setContactInfo] = useState({ name: "", email: "", message: "" });

  const [showRecycleOptions, setShowRecycleOptions] = useState(false);
  const [recycleFormOpen, setRecycleFormOpen] = useState(false);
  const [recycleInfo, setRecycleInfo] = useState({
    name: "",
    phone: "",
    pinCode: "",
    clothesCount: ""
  });

  const handleMenuClick = (section) => {
    setActiveSection(section);
    setShowRecycleOptions(false);
    setRecycleFormOpen(false);
  };

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactInfo({ ...contactInfo, [name]: value });
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert(Thank you for reaching out, ${contactInfo.name}!);
    setContactInfo({ name: "", email: "", message: "" });
  };

  const handleRecycleClick = () => {
    setRecycleFormOpen(true);
    setShowRecycleOptions(false);
  };

  const handleShopClick = () => {
    setActiveSection("shop");
  };

  return (
    <div className="container background-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-left">
          <img src="/my_logo.png" alt="Logo" className="logo-img" />
          <h1 className="logo-text">TERRA</h1>
        </div>
        <div className="nav-right">
          <a href="/" onClick={() => handleMenuClick("home")}>Home</a>
          <a href="#" onClick={() => handleMenuClick("about")}>About</a>
          <span className="icon">🤍</span>
          <button className="login-btn">Login In</button>
        </div>
      </nav>

      {/* Content Display */}
      <div className="content">
        {activeSection === "home" && (
          <div>
            <header className="header">
              <h1>🌿 Sustainable Fashion Guide</h1>
              <p>Make eco-conscious fashion choices</p>
            </header>

            <section className="card-container">
              <div className="card" onClick={() => setShowRecycleOptions(true)}>
                <h2>♻ Recycle/Upcycle</h2>
                <p>Learn how to recycle and upcycle old clothes and fabrics.</p>
              </div>

              <div className="card" onClick={handleShopClick}>
                <h2>🛍 Shop</h2>
                <p>Buy eco-friendly and sustainable fashion items.</p>
              </div>

              <div className="card" onClick={() => alert("You clicked Donation!")}>
                <h2>🎁 Donation</h2>
                <p>Donate unused clothes to help those in need.</p>
              </div>
            </section>

            {showRecycleOptions && (
              <div className="options-popup">
                <h3>Select an Option:</h3>
                <button onClick={handleRecycleClick}>Recycle</button>
                <button onClick={() => alert("Upcycle option coming soon!")}>Upcycle</button>
              </div>
            )}

            {recycleFormOpen && (
              <form className="recycle-form" onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you! We will reach out to you soon.");
                setRecycleFormOpen(false);
                setRecycleInfo({ name: "", phone: "", pinCode: "", clothesCount: "" });
              }}>
                <h3>Recycle Clothes</h3>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={recycleInfo.name}
                  onChange={(e) => setRecycleInfo({ ...recycleInfo, name: e.target.value })}
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={recycleInfo.phone}
                  onChange={(e) => setRecycleInfo({ ...recycleInfo, phone: e.target.value })}
                  required
                />
                <input
                  type="text"
                  name="pinCode"
                  placeholder="Pin Code"
                  value={recycleInfo.pinCode}
                  onChange={(e) => setRecycleInfo({ ...recycleInfo, pinCode: e.target.value })}
                  required
                />
                <input
                  type="number"
                  name="clothesCount"
                  placeholder="Number of Clothes"
                  value={recycleInfo.clothesCount}
                  onChange={(e) => setRecycleInfo({ ...recycleInfo, clothesCount: e.target.value })}
                  required
                />
                <button type="submit">Submit</button>
              </form>
            )}

            <section className="big-card-section">
              <div className="big-card">
                <h2>We are <span className="highlight">not (just)</span> a fashion guide.</h2>
                <p>Fashion harms the planet. <span className="highlight-small">Not us. We heal it.</span></p>
              </div>
            </section>

            <section className="badge-section">
              <h2>🏆 Achieve Your Badges!</h2>
              <div className="badge-container">
                <div className="badge-card">
                  <h3>🌱 Green Shopper</h3>
                  <p>Awarded when you purchase eco-friendly fashion for the first time.</p>
                </div>
                <div className="badge-card">
                  <h3>♻ Upcycle Master</h3>
                  <p>Given for successfully upcycling and sharing creative projects.</p>
                </div>
                <div className="badge-card">
                  <h3>🛒 Thrift Savvy</h3>
                  <p>Earned when you make your first thrift or second-hand purchase.</p>
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
                <p>Track Order</p>
                <p>Returns and Refund</p>
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
                <p>User Policy</p>
                <p>FAQ</p>
              </div>

              <div className="contact-column">
                <h2>Contact Us</h2>
                <p>📧 terra@gmail.com</p>
              </div>

              <div className="contact-column">
                <h2>Follow Us</h2>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                    alt="Instagram"
                    className="social-icon"
                  />
                </a>
              </div>
            </section>
          </div>
        )}

        {/* Shop Section */}
        {activeSection === "shop" && (
          <div className="shop-page">
            <h1>🌱 Sustainable Brands</h1>
            <div className="brand-card-container">
              {brands.map((brand, index) => (
                <div key={index} className="brand-card" onClick={() => window.open(brand.website, "_blank")}>
                  <h3>{brand.name}</h3>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SustainableFashionGuide;
