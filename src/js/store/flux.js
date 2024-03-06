const BASE_URL= "https://www.swapi.tech/api/";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			rootResources:[],
			reNames : ["Films", "People", "Planets", "Species", "Starships", "Vehicles"],
			favorites : [],
			detail:{},
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
//in a future modify this funtionc to accept any new resource.
			getRootResources: async () => {
				const response = await fetch(BASE_URL);
				const root = await response.json();
				if(root.message == "ok"){
					const rootResources = [];
					const filmsResponse = await fetch(root.result.films);
					const films = await filmsResponse.json();
					rootResources.push(films);
				

					const peopleResponse = await fetch(root.result.people)
					const peoples = await peopleResponse.json();
					rootResources.push(peoples);

					const planetsResponse = await fetch(root.result.planets)
					const planets = await planetsResponse.json();
					rootResources.push(planets);

					const speciesResponse = await fetch(root.result.species)
					const species = await speciesResponse.json();
					rootResources.push(species);

					const starshipsResponse = await fetch(root.result.starships)
					const starships = await starshipsResponse.json();
					rootResources.push(starships);

					const vehiclesResponse = await fetch(root.result.vehicles)
					const vehicles = await vehiclesResponse.json();
					rootResources.push(vehicles);
					// console.log(rootResources);
					setStore({rootResources: rootResources});
				}			  
			},
			
			getResource: async (resource_name) => {
				const response = await fetch(BASE_URL + "resource_name/");
				const films = response.json();
				console.log(films);
			},

			addFavorite: (name) => {
				const myFavorites = getStore().favorites;
				myFavorites.push(name);
				setStore({favorites: myFavorites});
			},

			removeFavorite: (name) => {
				const myFavorites = getStore().favorites.filter(item => item != name);
				setStore({favorites: myFavorites});
			},

			saveDetail: async (data) => {
				const film = data._id ? true : false;
				if( film ) {
					setStore({detail: data});
				}else{
					const response = await fetch(data.url);
					const mydetail = await response.json();
					setStore({detail: mydetail.result})
				}
				
			},

			getPeople: async () => {
				const response = await fetch(
					BASE_URL + "people?page=1&limit=100"
				);
				const body = await response.json();
				const people = body.results;
				setStore({
					people: people
				});
			},

			getPerson: async (id) => {
				const response = await fetch(
					BASE_URL + "people/" + id
				);
				const body = await response.json();
				const person = body.result;
				return person;
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
