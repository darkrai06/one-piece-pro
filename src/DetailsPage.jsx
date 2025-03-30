import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";
import Modal from "./Modal";

const DetailsPage = () => {
  const param = useParams();
  const data = useLoaderData();
  const [showModal, setShowModal] = useState(false);

  const handleTalkWithExpert = () => {
    const currentHour = new Date().getHours();

    if (currentHour >= 10 && currentHour < 20) {

      window.open("https://meet.google.com/", "_blank");
    } else {
      setShowModal(true);
    }
  };

  return (
    <div className="min-h-screen bg-base-100 p-6">
      <Helmet>
        <title>Details | One Piece</title>
      </Helmet>

      <h1 className="text-4xl font-bold text-center text-gray-100 my-6">
        Adventure Details
      </h1>

      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        {data
          .filter((d) => d.ID == param.id)
          .map((d) => (
            <div key={d.ID} className="flex flex-col md:flex-row gap-6">
              {/* Image Section */}
              <img
                src={d.Image}
                className="w-full md:w-1/2 rounded-lg shadow-md"
                alt={d.AdventureTitle}
              />

              {/* Details Section */}
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-gray-900 mb-3">
                  {d.AdventureTitle}
                </h2>
                <p className="text-gray-700">
                  <span className="font-semibold">Description:</span>{" "}
                  {d.ShortDescription}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Category:</span> {d.CategoryName}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Cost:</span> ${d.AdventureCost}
                </p>

                {/* Talk with Expert Button */}
                <button
                  onClick={handleTalkWithExpert}
                  className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
                >
                  Talk With Expert
                </button>
              </div>
            </div>
          ))}
      </div>

      {/* Modal */}
      {showModal && <Modal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default DetailsPage;
