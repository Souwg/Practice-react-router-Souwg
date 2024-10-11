const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			apiUrl: 'https://swapi.dev/api/',
			characters: [],
			planets: [],
			/*demo: [
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
			]*/
				
		},
		actions: {
			getCharacter: async () =>{
				const {apiUrl} = getStore()
				const response = await fetch (`${apiUrl}/people`)
				const data = await response.json()
				console.log(data)
				if(response.ok){
					setStore({characters: data.results,})
					console.log("API Data:", data.results);
					const actions = getActions();
            		await actions.addCharacterImages();
				}else{
					setStore({characters: false,})
				}

			},

			addCharacterImages: async () => {
                const store = getStore();
                const characters = store.characters;
                if (characters.length > 0) {
                    const charactersWithImages = characters.map((character, index) => {
                        return {
                            ...character,
                            imageUrl: `https://starwars-visualguide.com/assets/img/characters/${index + 1}.jpg`
                        };
                    });
                    setStore({ characters: charactersWithImages });
                    console.log("Characters with Images:", charactersWithImages);
                }
            },

			getPlanets: async () =>{
				const {apiUrl} = getStore()
				const response = await fetch (`${apiUrl}/planets`)
				const data = await response.json()
				console.log(data)
				if(response.ok){
					setStore({planets: data.results.filter(planet => planet.name !== 'Tatooine')});
					const actions = getActions();
					await actions.addPlanetImages();
				}else{
					setStore({planets: false,})
				}
			},

			addPlanetImages: async () => {
				const store = getStore();
				const planets = store.planets;
				if(planets.length > 0){
					const planetsImages = planets.map((planet, index)=>{	
						return{
							...planet,
							planetUrl: `https://starwars-visualguide.com/assets/img/planets/${index + 2}.jpg`
						};
					});
					setStore({ planets: planetsImages });
				}
			},
			
			// Use getActions to call a function within a fuction
			/*exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			/*},
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
			}*/
		}
	};
};

export default getState;
