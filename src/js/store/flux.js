const getState = ({ getStore, setStore }) => {
	return {
		store: {
			// guardar todos los estados globales de nuestra app
			//Your data structures, A.K.A Entities
			listaContactos: []
		},
		actions: {
			agregarContacto: (fullName, email, phone, address) => {
				// getStore().listaContactos.concat({ fullName, email, phone, address }) ==> [{ fullName: "Ada lovelace", email: "ada123@gmail.com", phone: "29374734", address: "plaza italia" },
				// { fullName: "Pepe", email: "pepe123@gmail.com", phone: "29374734", address: "plaza italia" },{}]
				setStore({ listaContactos: getStore().listaContactos.concat({ fullName, email, phone, address }) });
				// console.log({ fullName, email, phone, address });
				console.log(getStore());
			},
			obtenerContactos: () => {
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/rosinni16")
					.then(response => response.json()) // converto la respuesta en un json
					.then(data => setStore({ listaContactos: data })) // guardo la info en un objeto
					.catch(err => console.log("Request Failed", err));
			}

			// todas las funciones globales de nuestra app
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
		}
	};
};

export default getState;
