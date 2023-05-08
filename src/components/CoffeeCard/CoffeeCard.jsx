import React from 'react';

const CoffeeCard = ({ tea }) => {
  const { coffee, quantity, category, details, supplier, taste, photo } =
    tea;
  return (
    <div className="card card-side bg-base-100 shadow-xl p-4">
      <figure>
        <img src={photo} alt="Movie" />
      </figure>
      <div className=" w-full flex justify-between mr-5">
        <div>
          <h2 className="card-title"> Name : {coffee}</h2>
          <p>{quantity}</p>
          <p>{supplier}</p>
          <p>{taste}</p>
        </div>
        <div className="card-actions justify-end">
          <div className="btn-group btn-group-vertical space-y-4">
            <button className="btn ">view</button>
            <button className="btn">Edit</button>
            <button className="btn">X</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;