import Swal from "sweetalert2";
import React from "react";

const AddCoffee = () => {
  const handleAddCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const coffee = form.coffee.value;
    const quantity = form.quantity.value;
    const category = form.category.value;
    const details = form.details.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const photo = form.photo.value;
    const newCoffee = {
      coffee,
      quantity,
      category,
      details,
      supplier,
      taste,
      photo,
    };
    console.log(newCoffee);
    // send data to server
    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
         Swal.fire({
           title: "Success",
           text: "User Added Successfully",
           icon: "success",
           confirmButtonText: "Cool",
         });
       }
      });
  };

  return (
    <div className="container mx-auto bg-[#F4F3F0] ">
      <div className="text-center mb-10">
        <h1 className="text-4xl text-purple-800  font-extrabold mt-10 mb-5">
          Add Coffee
        </h1>
        <p className="  text-lg ">
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. <br />
          The point of using Lorem Ipsum is that it has a more-or-less normal{" "}
          <br />
          distribution of letters, as opposed to using Content here.
        </p>
      </div>
      <form className=" border p-10 rounded-lg" onSubmit={handleAddCoffee}>
        <div className="lg:flex gap-8">
          <div className="form-control md:w-1/2 mb-5">
            <label className="label">
              <span className="label-text">Coffee Name </span>
            </label>
            <label className="input-group input-group-vertical">
              <span>Coffee</span>
              <input
                type="text"
                name="coffee"
                placeholder="Coffee Name"
                className="input input-bordered "
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 mb-5">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <label className="input-group input-group-vertical">
              <span>Quantity</span>
              <input
                type="text"
                name="quantity"
                placeholder="Quantity"
                className="input input-bordered "
              />
            </label>
          </div>
        </div>

        <div className="lg:flex gap-8">
          <div className="form-control md:w-1/2 mb-5">
            <label className="label">
              <span className="label-text">Supplier Name </span>
            </label>
            <label className="input-group input-group-vertical">
              <span>Supplier</span>
              <input
                type="text"
                name="supplier"
                placeholder="supplier"
                className="input input-bordered "
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 mb-5">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <label className="input-group input-group-vertical">
              <span>Taste</span>
              <input
                type="text"
                name="taste"
                placeholder="Taste"
                className="input input-bordered "
              />
            </label>
          </div>
        </div>
        <div className="lg:flex gap-8">
          <div className="form-control md:w-1/2 mb-5">
            <label className="label">
              <span className="label-text">Category </span>
            </label>
            <label className="input-group input-group-vertical">
              <span>Category</span>
              <input
                type="text"
                name="category"
                placeholder="Category"
                className="input input-bordered "
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 mb-5">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="input-group input-group-vertical">
              <span>Details</span>
              <input
                type="text"
                name="details"
                placeholder="details"
                className="input input-bordered "
              />
            </label>
          </div>
        </div>
        <div className="form-control mb-5">
          <label className="label">
            <span className="label-text">Photo url</span>
          </label>
          <label className="input-group input-group-vertical">
            <span>Photo</span>
            <input
              type="text"
              name="photo"
              placeholder="Photo url"
              className="input input-bordered "
            />
          </label>
        </div>
        <div className="lg:flex gap-8 ">
          <div className="form-control  mb-5 w-full">
            <input
              type="submit"
              value="Add Coffee"
              className="btn btn-block text-white"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;
