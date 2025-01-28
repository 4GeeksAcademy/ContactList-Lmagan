import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import CardContact from "../component/CardContact";

const Contacts = () => {

    const { store } = useContext(Context)
    console.log(store.listContacts)


    return (

        <div className="w-75 mx-auto">
            <div className="d-flex justify-content-end">
                <Link to="/AddContact">
                    <button className="btn btn-success">Add New contact</button>
                </Link>
            </div>
            <ul className="list-group mt-3">
                {store.listContacts.map((contact, index) => {
                    return (
                        <CardContact contact={contact} key={index} />
                    )
                })}
            </ul>
        </div>
    );
};

export default Contacts;