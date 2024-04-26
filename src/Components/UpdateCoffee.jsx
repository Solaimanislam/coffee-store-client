import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCoffee = () => {

    const coffee = useLoaderData();

    const { _id, name, quantity, supplier, taste, category, details, Photo } = coffee;


    const handleUpdateCoffee = e => {
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const Photo = form.Photo.value;

        const updatedCoffee = {name, quantity, supplier, taste, category, details, Photo};
        console.log(updatedCoffee);

        // send data to the server
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })

    }

    return (
        <div className=" bg-purple-200 p-24">
            <h2 className=" text-3xl font-bold">Update Coffee: {name}</h2>
            <form onSubmit={handleUpdateCoffee}>
                {/* first name and quantity row */}
                <div className="md:flex mb-6">
                    <div className="md:w-1/2">
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Coffee Name</span>
                            </div>
                            <input type="text" name="name" defaultValue={name} placeholder="Coffee Name" className="input input-bordered w-full max-w-xs" />
                        </label>
                    </div>
                    <div className="md:w-1/2">
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Available Quantity</span>
                            </div>
                            <input type="text" name="quantity" defaultValue={quantity} placeholder="Available Quantity" className="input input-bordered w-full max-w-xs" />
                        </label>
                    </div>
                </div>
                {/*  supplier and taste  */}
                <div className="md:flex mb-6">
                    <div className="md:w-1/2">
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Supplier Name</span>
                            </div>
                            <input type="text" name="supplier" defaultValue={supplier} placeholder="Supplier Name" className="input input-bordered w-full max-w-xs" />
                        </label>
                    </div>
                    <div className="md:w-1/2">
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Taste</span>
                            </div>
                            <input type="text" name="taste" defaultValue={taste} placeholder="Taste" className="input input-bordered w-full max-w-xs" />
                        </label>
                    </div>
                </div>
                {/* category and details */}
                <div className="md:flex mb-6">
                    <div className="md:w-1/2">
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Category</span>
                            </div>
                            <input type="text" name="category" defaultValue={category} placeholder="Category" className="input input-bordered w-full max-w-xs" />
                        </label>
                    </div>
                    <div className="md:w-1/2">
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Details</span>
                            </div>
                            <input type="text" name="details" defaultValue={details} placeholder="Details" className="input input-bordered w-full max-w-xs" />
                        </label>
                    </div>
                </div>
                {/* photo url */}
                <div className="w-full mb-6">
                    <div className="w-full">
                        <label className=" w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Photo URL</span>
                            </div>
                            <input type="text" name="Photo" defaultValue={Photo} placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <input type="submit" value="Update Coffee" className="btn btn-block" />

            </form>
        </div>
    );
};

export default UpdateCoffee;