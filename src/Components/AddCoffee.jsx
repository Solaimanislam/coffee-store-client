
import Swal from 'sweetalert2'
// https://i.ibb.co/yyNLKty/coffee1.jpg
// https://i.ibb.co/DbKchYn/coffee2.webp
// https://i.ibb.co/FKL3xXP/coffee3.jpg
// https://i.ibb.co/pRDpdS6/coffee4.jpg
// https://i.ibb.co/7g3mz8j/coffee5.png

const AddCoffee = () => {
    
    const handleAddCoffee = e => {
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const Photo = form.Photo.value;

        const newCoffee = {name, quantity, supplier, taste, category, details, Photo};
        console.log(newCoffee);

        // send data to the server
        fetch('http://localhost:5000/coffee', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })

    }

    return (
        <div className=" bg-purple-200 p-24">
            <h2 className=" text-3xl font-bold">Add Coffee</h2>
            <form onSubmit={handleAddCoffee}>
                {/* first name and quantity row */}
                <div className="md:flex mb-6">
                    <div className="md:w-1/2">
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Coffee Name</span>
                            </div>
                            <input type="text" name="name" placeholder="Coffee Name" className="input input-bordered w-full max-w-xs" />
                        </label>
                    </div>
                    <div className="md:w-1/2">
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Available Quantity</span>
                            </div>
                            <input type="text" name="quantity" placeholder="Available Quantity" className="input input-bordered w-full max-w-xs" />
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
                            <input type="text" name="supplier" placeholder="Supplier Name" className="input input-bordered w-full max-w-xs" />
                        </label>
                    </div>
                    <div className="md:w-1/2">
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Taste</span>
                            </div>
                            <input type="text" name="taste" placeholder="Taste" className="input input-bordered w-full max-w-xs" />
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
                            <input type="text" name="category" placeholder="Category" className="input input-bordered w-full max-w-xs" />
                        </label>
                    </div>
                    <div className="md:w-1/2">
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Details</span>
                            </div>
                            <input type="text" name="details" placeholder="Details" className="input input-bordered w-full max-w-xs" />
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
                            <input type="text" name="Photo" placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                
                <input type="submit" value="Add Coffee" className="btn btn-block" />

            </form>
        </div>
    );
};

export default AddCoffee;