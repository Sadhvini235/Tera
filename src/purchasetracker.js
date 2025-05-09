import React, { useState, useEffect } from "react";
import "./purchasetracker.css";

const initialPurchases = [
  {
    item: "Denim Jacket",
    brand: "EcoWear",
    price: 1500,
    category: "Outerwear",
    date: "2025-05-01",
    sustainable: true,
  },
  {
    item: "Sneakers",
    brand: "GreenStep",
    price: 12000,
    category: "Shoes",
    date: "2025-04-18",
    sustainable: false,
  },
];

const categories = ["All", "Tops", "Bottoms", "Dresses", "Outerwear", "Shoes"];

const PurchaseTracker = () => {
  const [purchases, setPurchases] = useState(initialPurchases);
  const [filter, setFilter] = useState("All");
  const [monthlyInsights, setMonthlyInsights] = useState({});

  const filteredPurchases =
    filter === "All"
      ? purchases
      : purchases.filter((p) => p.category === filter);

  const totalSpent = purchases.reduce((sum, p) => sum + p.price, 0);
  const sustainableSpent = purchases
    .filter((p) => p.sustainable)
    .reduce((sum, p) => sum + p.price, 0);
  const sustainableCount = purchases.filter((p) => p.sustainable).length;

  let badge = "Getting Started 🔴";
  if (sustainableCount >= 5) {
    badge = "Eco Hero 🟢";
  } else if (sustainableCount >= 2) {
    badge = "Eco Shopper 🟡";
  } else if (sustainableCount === 1) {
    badge = "Beginner 🌱";
  }

  const handleAdd = () => {
    const item = prompt("Item Name:");
    const brand = prompt("Brand:");
    const price = parseFloat(prompt("Price:"));
    const category = prompt("Category (Tops, Bottoms, etc.):");
    const date = prompt("Date (YYYY-MM-DD):");
    const sustainabilityInput = prompt("Is it sustainable? (Yes/No)").toLowerCase();
    const sustainable = sustainabilityInput === "yes";

    if (item && !isNaN(price)) {
      const newPurchase = { item, brand, price, category, date, sustainable };
      setPurchases([...purchases, newPurchase]);
    }
  };

  const getMonthName = (dateStr) =>
    new Date(dateStr).toLocaleString("default", {
      month: "long",
      year: "numeric",
    });

  const calculateMonthlyInsights = (data) => {
    const insights = {};
    data.forEach(({ date, price }) => {
      const month = getMonthName(date);
      insights[month] = (insights[month] || 0) + price;
    });
    return insights;
  };

  useEffect(() => {
    setMonthlyInsights(calculateMonthlyInsights(purchases));
  }, [purchases]);

  return (
    <div className="tracker-container">
      <h1>📋 Purchase Tracker</h1>
      <p>Encourages tracking spending and sustainability.</p>

      <div className="summary">
        <div>Total Amount Spent: ₹{totalSpent.toFixed(2)}</div>
        <div>Sustainable Purchases: ₹{sustainableSpent.toFixed(2)}</div>
        <div>Total Items: {purchases.length}</div>
        <div>Sustainable Items: {sustainableCount}</div>
        <div className={`badge ${badge.split(" ")[2]}`}>Badge: {badge}</div>
      </div>

      <section className="insights-section">
        <h2>📊 Monthly Insights</h2>
        <div className="insights-cards">
          {Object.entries(monthlyInsights).map(([month, total]) => (
            <div className="insight-card" key={month}>
              <h3>{month}</h3>
              <p>Total Spent: ₹{total}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="filters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={filter === cat ? "active" : ""}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <table className="purchases-table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Brand</th>
            <th>Price (₹)</th>
            <th>Category</th>
            <th>Date</th>
            <th>Sustainable</th>
          </tr>
        </thead>
        <tbody>
          {filteredPurchases.map((p, i) => (
            <tr key={i}>
              <td>{p.item}</td>
              <td>{p.brand}</td>
              <td>₹{p.price}</td>
              <td>{p.category}</td>
              <td>{p.date}</td>
              <td>{p.sustainable ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className="add-btn" onClick={handleAdd}>
        + Add New Purchase
      </button>
    </div>
  );
};

export default PurchaseTracker;
