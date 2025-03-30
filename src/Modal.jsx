import React from "react";

const Modal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-3">Expert Consultation Time</h2>
        <p className="text-gray-700">
          Our experts are available from <strong>10:00 AM to 8:00 PM</strong>.
          Please visit again during these hours to connect with an expert.
        </p>
        <button
          onClick={onClose}
          className="mt-4 w-full px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
