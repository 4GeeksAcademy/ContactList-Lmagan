const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
		
			listContacts: []
		},
		actions: {
            createUser: () => {
                fetch("https://playground.4geeks.com/contact/agendas/LMagan", {
                    method: "POST",

                })
                    .then((response) => response.json())
                    .then((data) => {
                        console.log(data);

                    })
                    .catch((error) => console.log(error));
            },

            getInfoContacts: async () => {
                try {
                    const response = await  fetch("https://playground.4geeks.com/contact/agendas/LMagan/contacts", {
                        method: "GET"
                    })
                    if (response.status == 404) {
                        getActions().createUser()
                    }
                    const data = await response.json()
                    console.log("estos son mis datos ", data);
                    setStore({ listContacts: data.contacts })
                } catch (error) { console.error("error to fetch")
                    
                }},
               

            addContactToList: async (contact) => {
                const store = await getStore();
                setStore({ ...store, listContacts: [...store.listContacts, contact] })
            },

            createContact: async (payload) => {
               await fetch("https://playground.4geeks.com/contact/agendas/LMagan/contacts", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(
                        payload
                    ),
                })
                    .then((response) => response.json())
                    .then((data) => {
                        console.log(data);
                        const actions = getActions(); 
                        actions.addContactToList(data); 
                        console.log("Contact added:", data);
                    })
                    .catch((error) => console.log(error));
            },
            deleteContact: (id) => {
                fetch(`https://playground.4geeks.com/contact/agendas/LMagan/contacts/${id}`, {
                    method: "DELETE",
                })
                    .then((response) => {
                        console.log(response)
                        if (response.ok) {
                            const store = getStore();
                            const updatedContacts = store.listContacts.filter(contact => contact.id !== id);
                            setStore({ listContacts: updatedContacts });
                            console.log(`Contact with ID ${id} deleted`);
                        } else {
                            console.log("Error deleting contact");
                        }
                    })
                    .catch((error) => console.log(error));
            },

            editContact: (id, contact,navigate) => {
                const store = getStore()
                fetch(`https://playground.4geeks.com/contact/agendas/LMagan/contacts/${id}`, {
                    method: "PUT",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(contact)
                })
                    .then((response) => {
                        if (response.ok) {
                            return response.json()
                        }
                    })
                    .then((data) => {
                        if (data) {
                            const updatedList = store.listContacts.map(contact => {
                                if (contact.id == id) {
                                    contact = data
                                }
                                return contact
                            })
                            setStore({ listContacts: updatedList })
                            navigate("/")
                        }
                    })
                    .catch((error) => console.log(error));


            },
        
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
