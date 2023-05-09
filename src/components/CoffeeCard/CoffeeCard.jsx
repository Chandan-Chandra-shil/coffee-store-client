import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ tea, items, setItems }) => {
  const { _id, coffee, quantity, supplier, taste, photo } = tea;
  const handleDelete = (_id) => {
    console.log("handle delete id .....", _id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deleteCount > 0) {
              Swal.fire("Deleted!", "Your coffee has been deleted.", "success");
            }
            const remaining = items.filter((item) => item._id !== _id);
            setItems(remaining);
          });
      }
    });
  };

  return (
    <div className="card card-side bg-base-100 shadow-xl p-4">
      <figure>
        <img className="mr-4" src={photo} alt="Movie" />
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
            <Link to={`/updateCoffee/${_id}`}>
              <button className="btn btn-info">Edit</button>
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-warning"
            >
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
