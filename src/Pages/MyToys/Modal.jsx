import React from 'react';

const Modal = () => {
    const { _id, price, description } = toy
    const handleUpdate = () => {
        // console.log(_id)

    }
    return (
        <>
            {/* The button to open modal */}
            {/* <label className="btn">open modal</label> */}

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <form onSubmit={handleUpdate} className="modal-box">
                    <div className="grid grid-cols-1 m-10">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" defaultValue={price} name='price' placeholder="Price" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Id</span>
                            </label>
                            <input type="text" defaultValue={_id} name='_id' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Available Quantity</span>
                            </label>
                            <input type="number" name='quantity' placeholder="Available Quantity" className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input type="text" defaultValue={description} name='description' placeholder="Description" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="modal-action">
                        <input htmlFor="my-modal" type="submit" value="Update" />
                        {/* <label  className="btn">Yay!</label> */}
                    </div>
                </form>
            </div>
        </>
    );
};

export default Modal;