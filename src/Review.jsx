import React from "react";
import { Helmet } from "react-helmet-async";

const reviews = [
  {
    name: "Monkey D. Luffy",
    rating: 5,
    comment: "This platform is the One Piece of websites! Adventure awaits at every click!",
    avatar: "https://wallpaperaccess.com/download/luffy-386773"
  },
  {
    name: "Roronoa Zoro",
    rating: 4,
    comment: "I got lost a few times navigating, but overall, it's a strong experience!",
    avatar: "https://wallpaperaccess.com/download/one-piece-zoro-180312"
  },
  {
    name: "Nami",
    rating: 5,
    comment: "The UI is as beautiful as a map to treasure! Highly recommend it!",
    avatar: "https://wallpaperaccess.com/download/nami-one-piece-1635543"
  },
  {
    name: "Sanji",
    rating: 4,
    comment: "Visually stunning, but I wish it had more cooking tutorials! 😉",
    avatar: "https://wallpaperaccess.com/download/sanji-1134153"
  },
  {
    name: "Usopp",
    rating: 5,
    comment: "The best site ever! (And that’s not a lie!)",
    avatar: "https://wallpaperaccess.com/download/ussop-bounty-7518563"
  },
  {
    name: "Franky",
    rating: 4,
    comment: "Superrrrrrrrrrrr!!! ",
    avatar: "https://wallpaperaccess.com/download/franky-one-piece-1577022"
  },
  {
    name: "Tony Tony Chopper",
    rating: 5,
    comment: "So cute! Easy to use, even for someone like me! 🦌",
    avatar: "https://wallpaperaccess.com/download/one-piece-chopper-548188"
  }
];

const Review = () => {
  return (
    <div className="min-h-screen bg-base-300 text-white py-12">
        <Helmet>
                <title>Review | One Piece</title>
              </Helmet>
      <div className="max-w-4xl mx-auto p-6 bg-white bg-opacity-10 backdrop-blur-md rounded-xl shadow-lg">
        <h1 className="text-4xl font-extrabold text-center mb-8">🏴‍☠️ Client Reviews 🏴‍☠️</h1>
        <div className="grid gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="flex items-center bg-black bg-opacity-20 p-5 rounded-lg shadow-md">
              <img
                src={review.avatar}
                alt={review.name}
                className="w-16 h-16 rounded-full border-2 border-yellow-400 mr-4"
              />
              <div>
                <h3 className="text-xl font-bold">{review.name}</h3>
                <div className="flex">
                  {Array(review.rating)
                    .fill()
                    .map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">⭐</span>
                    ))}
                </div>
                <p className="text-gray-200">{review.comment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Review;
