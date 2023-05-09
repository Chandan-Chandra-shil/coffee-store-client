import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const teas = useLoaderData();
  const { _id, coffee, quantity, category, details, supplier, taste, photo } =
    teas;
  const handleUpdateCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const coffee = form.coffee.value;
    const quantity = form.quantity.value;
    const category = form.category.value;
    const details = form.details.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const photo = form.photo.value;
    const updateCoffee = {
      coffee,
      quantity,
      category,
      details,
      supplier,
      taste,
      photo,
    };
    console.log(updateCoffee);
    // update  data to server
    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success",
            text: "Coffee Update Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="container mx-auto bg-[#F4F3F0]  py-10">
      <h2 className="text-4xl text-center text-purple-800  font-extrabold mt-10 mb-5">
        Update Coffee :
        <span className="text-5xl text-purple-300"> {coffee}</span>
      </h2>
      <div>
        <form className=" border p-10 rounded-lg" onSubmit={handleUpdateCoffee}>
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
                  defaultValue={coffee}
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
                  defaultValue={quantity}
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
                  defaultValue={supplier}
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
                  defaultValue={taste}
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
                  defaultValue={category}
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
                  defaultValue={details}
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
                defaultValue={photo}
                className="input input-bordered "
              />
            </label>
          </div>
          <div className="lg:flex gap-8 ">
            <div className="form-control  mb-5 w-full">
              <input
                type="submit"
                value="Update Coffee"
                className="btn btn-block text-white"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
