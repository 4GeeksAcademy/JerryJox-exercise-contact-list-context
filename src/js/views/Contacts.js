import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";

import { ContactCard } from "../component/ContactCard.js";
import { Modal } from "../component/Modal";

export const Contacts = () => {
	const { store, actions } = useContext(Context);
	// console.log(store.listaContactos);
	const [state, setState] = useState({
		showModal: false
	});
	// actions.obtenerContactos(); //no se debe
	useEffect(() => {
		//useEffect funciona como onload y ejecuta el codigo que tiene dentro ni bien se carga el componente
		actions.obtenerContactos();
	}, []);

	return (
		<div className="container">
			<div>
				<p className="text-right my-3">
					<Link className="btn btn-success" to="/add">
						Add new contact
					</Link>
				</p>
				<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
					<ul className="list-group pull-down" id="contact-list">
						{store.listaContactos.map((item, index) => (
							<ContactCard
								key={index}
								fullName={item.full_name}
								onDelete={() => setState({ showModal: true })}
							/>
						))}

						{/* <ContactCard />
						<ContactCard />
						<ContactCard /> */}
					</ul>
				</div>
			</div>
			<Modal show={state.showModal} onClose={() => setState({ showModal: false })} />
		</div>
	);
};
