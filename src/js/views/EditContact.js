import React, {useState, useEffect, useRef, useContext} from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Context } from "../store/appContext";


const EditContact = () => {
    const { store, actions } = useContext(Context)
    const {id} = useParams()
    let navigate = useNavigate();
    const [editedContact, setEditedContact] = useState({
        name:"",
        phone:"",
        email:"",
        address:""
    })
    useEffect(()=> {
        const contactToEdit = store.listContacts.find(contact => contact.id == parseInt(id))
        setEditedContact(contactToEdit)
    },[])
    return (

        <div className="container">
            <h1 className="text-center">Update Contact</h1>

            <form className="container">
                <div className="mb-3">
                    <label for="formGroupExampleInput1" className="form-label">Full Name</label>
                    <input type="text" name="name" className="form-control" id="formGroupExampleInput1" placeholder="Full name" onChange={(e) => setEditedContact({...editedContact,[e.target.name]:e.target.value})} value={editedContact.name} />
                </div>
                <div className="mb-3">
                    <label for="formGroupExampleInput2" className="form-label">Email</label>
                    <input type="text" name="email" className="form-control" id="formGroupExampleInput2" placeholder="Enter email" onChange={(e) => setEditedContact({...editedContact,[e.target.name]:e.target.value})} value={editedContact.email} />
                </div>
                <div className="mb-3">
                    <label for="formGroupExampleInput3" className="form-label">Phone</label>
                    <input type="text" name="phone" className="form-control" id="formGroupExampleInput3" placeholder="Enter phone" onChange={(e) => setEditedContact({...editedContact,[e.target.name]:e.target.value})} value={editedContact.phone} />
                </div>
                <div className="mb-3">
                    <label for="formGroupExampleInput4" className="form-label">Address</label>
                    <input type="text" name="address" className="form-control" id="formGroupExampleInput4" placeholder="Enter address" onChange={(e) => setEditedContact({...editedContact,[e.target.name]:e.target.value})} value={editedContact.address} />
                </div>
                <div className="mb-3">
                    <button type="button" className="btn btn-primary" onClick={()=> actions.editContact(id, editedContact,navigate)}>Update Contact</button>
                </div>
            </form>

            <Link to="/"><a>volver a Contacts</a></Link>
        </div>
    )
}
export default EditContact