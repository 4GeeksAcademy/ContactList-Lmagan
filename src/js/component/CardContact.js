import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const CardContact = ({ contact }) => {
    const { store, actions } = useContext(Context)

    const eliminarContacto = () => {
        console.log(contact)
        actions.deleteContact(contact.id);
    };

    return (
        <li className="list-group-item d-flex justify-content-center">
            <div className="d-flex align-items-center w-75">
                <div className="col-md-3 d-flex justify-content-center">
                    <img
                        className="rounded-circle img-fluid"
                        src="https://img.asmedia.epimg.net/resizer/v2/REG5OGLOHNPPBLDIFINBZF4TVQ.jpg?auth=b4ca2f2a1999954ce7007d7afadcb41b5d2d718cad5746ce07e354a6b0f3153c&width=1200&height=1200&smart=true"
                        alt="Contact"

                    />
                </div>
                <div className="col-md-6">
                    <h5 className="card-title mb-1">{contact.name}</h5>
                    <p className="card-text mb-1">{contact.address}</p>
                    <p className="card-text mb-1">{contact.phone}</p>
                    <p className="card-text mb-1">{contact.email}</p>
                </div>
                <div className="col-md-3 d-flex justify-content-end">
                    <Link to={"/editContact/" + contact.id} className="btn btn-link p-0 me-3">
                    <i class="fa-solid fa-pencil"></i>
                    </Link>
                    {/* <button className="btn btn-link p-0" onClick={eliminarContacto}>
                        <i className="fa fa-trash fa-lg"></i>
                    </button> */}
                    {/* <!-- Button trigger modal --> */}
                    <button type="button" data-bs-toggle="modal" data-bs-target={"#delete-contact-" + contact.id} >
                    <i class="fa-regular fa-trash-can"></i>
                    </button>

                    {/* <!-- Modal --> */}
                    <div className="modal fade" id={"delete-contact-" + contact.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Are you sure?</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    If you delete this thing the etire universe will go down!
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Oh no!</button>
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={eliminarContacto}>Yes baby!</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    )
}
export default CardContact