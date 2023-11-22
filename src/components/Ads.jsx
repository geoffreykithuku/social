// Ads.js
import React from "react";

const Ads = ({ ads }) => {
  return (
    <div className="text-white bg-gray-900 p-5 rounded border border-gray-800">
      <h2 className="text-2xl font-bold mb-2">Ads</h2>
      <ul>
        {ads.map((ad) => (
          <li key={ad.id} className="mb-2 bg-gray-800 rounded p-5">
            {ad.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ads;
