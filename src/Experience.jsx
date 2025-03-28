import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "animate.css";

const Experience = () => {
  const [experienceCards, setExperienceCards] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setExperienceCards(data));
  }, []);
  return (
    <div>
      <div className="flex flex-col">
        {experienceCards.map((card) => (
          <div className="hero bg-base-200 p-4">
          <div className="hero-content bg-cyan-900 rounded-xl flex flex-col lg:flex-row items-center lg:items-start">
            {/* Image */}
            <img
              src={card.Image}
              className="lg:w-[640px] lg:h-[360px] sm:w-full md:w-auto rounded-lg shadow-2xl animate__animated animate__bounce"
              alt="Adventure"
            />
            
            {/* Text Content */}
            <div className="lg:ml-10 text-center lg:text-left max-w-xl">
              <h1 className="text-5xl font-bold">{card.AdventureTitle}</h1>
              <p className="py-6">
                <span className="font-extrabold">Short Description:</span>{" "}
                {card.ShortDescription}
              </p>
              <h3 className="py-6">
                <span className="font-extrabold">Eco Friendly Features:</span>{" "}
                {Array.isArray(card.EcoFriendlyFeatures)
                  ? card.EcoFriendlyFeatures.join(", ")
                  : card.EcoFriendlyFeatures}
              </h3>
              <div className="card-actions">
                <Link to={`/details/${card.ID}`}>
                  <button className="btn btn-primary">Explore Now</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        ))}
      </div>
    </div>
  );
};

export default Experience;
