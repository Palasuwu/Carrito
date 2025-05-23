import React from "react";
import "../styles.css";

const ScrollCard = () => {
  const categories = [
    { name: "Laptops", icon: "💻" },
    { name: "Gaming", icon: "🎮" },
    { name: "Celulares y Accesorios", icon: "📱" },
    { name: "Electrónicos", icon: "🔌" },
    { name: "Hogar", icon: "🏠" },
    { name: "Smartwatch y Bandas", icon: "⌚" },
    { name: "Mascotas", icon: "🐶" },
  ];

  return (
    <div className="tag-list">
      <div className="inner">
        {categories.map((category, index) => (
          <div key={index} className="tag">
            <div className="icon">{category.icon}</div>
            <p>{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollCard;