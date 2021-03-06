function getName() {
    return new Promise(resolve => {

        setTimeout(()=> {
            resolve({
                firstName: 'Freeman',
                lastName: 'Yam'
            });
        }, 1000);
    });
}

const VehicleModule = {
    namespaced: true,
    state: {
        firstName: 'Paul',
        lastName: 'Aeria',
        vehicles: [
            {
                name: 'Car 1',
                type: 'Car'
            },
            {
                name: 'Car 2',
                type: 'Car'
            },
            {
                name: 'Car 3',
                type: 'Car'
            },
            {
                name: 'Car 4',
                type: 'Car'
            },
            {
                name: 'Bicycle 1',
                type: 'Bicycle'
            },
            {
                name: 'Bicycle 2',
                type: 'Bicycle'
            },
            {
                name: 'Bicycle 3',
                type: 'Bicycle'
            },
            {
                name: 'Bicycle 4',
                type: 'Bicycle'
            }
        ]
    },
    mutations: {
        SET_FIRSTNAME(state, {firstName}) {
            state.firstName = firstName;
        },
        SET_LASTNAME(state, {lastName}) {
            state.lastName = lastName;
        },
        ADD_VEHICLE(state, {vehicle}) {
            state.vehicles.push(vehicle);
        }
    },
    actions: {
        setFirstName({ commit }, {firstName}) {
            commit('SET_FIRSTNAME', {firstName});
        },
        addVehicle({ commit }, { vehicle }) {
            commit('ADD_VEHICLE', { vehicle });
        },
        fetchName({ commit }) {
            getName()
                .then(({firstName, lastName}) => {
                    commit('SET_FIRSTNAME', {
                        firstName
                    });
                    commit('SET_LASTNAME', {
                        lastName
                    });
                })
        }
    },
    // setters: {
    //     firstName(state) {
    //
    //     }
    // },
    getters: {
        bicycles(state){
            return state.vehicles.filter(v => v.type === 'Bicycle');
        },
        cars(state) {
            return state.vehicles.filter(v => v.type === 'Car');
        },
        fullName(state) {
            return `${state.firstName} ${state.lastName}`;
        },
        firstName(state) {
            return state.firstName;
        }
    }
};

export default VehicleModule;