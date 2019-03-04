
const ChatBotModule = {
    namespaced: true,
    state: {
        stage: 'q2',
        progress: [
            {stage: 'q1', action: 'asking', type: 'question'},
            // {type: 'echo'},
            // {stage: 'q2', action: 'asking', type: 'question'},
        ],
        responsePromise: null,
        responseResolve: null,
        responseCallback: null,
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
        },
        SET_RESPONSE_PROMISE(state, responsePromise) {
            state.responsePromise = responsePromise;
        },
        SET_RESPONSE_RESOLVE(state, responseResolve) {
            state.responseResolve = responseResolve;
        },
        SET_RESPONSE_CALLBACK(state, responseCallback) {
            state.responseCallback = responseCallback;
        },
        ADD_PROGRESS(state, step) {
            state.progress.push(step);
        },
    },
    actions: {
        addProgress({ commit }, step) {
            commit('ADD_PROGRESS', step);
        },
        setResponsePromise({ commit }, responsePromise) {
            commit('SET_RESPONSE_PROMISE', responsePromise);
        },
        setResponseResolve({ commit }, responseResolve) {
            commit('SET_RESPONSE_RESOLVE', responseResolve);
        },
        setResponseCallback({ commit }, responseCallback) {
            commit('SET_RESPONSE_CALLBACK', responseCallback);
        },
        // setFirstName({ commit }, {firstName}) {
        //     commit('SET_FIRSTNAME', {firstName});
        // },
        // addVehicle({ commit }, { vehicle }) {
        //     commit('ADD_VEHICLE', { vehicle });
        // },
        // fetchName({ commit }) {
        //     getName()
        //         .then(({firstName, lastName}) => {
        //             commit('SET_FIRSTNAME', {
        //                 firstName
        //             });
        //             commit('SET_LASTNAME', {
        //                 lastName
        //             });
        //         })
        // }
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
        progress(state) {
            return state.progress;
        },
        stage(state) {
            return state.stage;
        },
        responsePromise(state) {
            return state.responsePromise;
        },
        responseResolve(state) {
            return state.responseResolve;
        },
        responseCallback(state) {
            return state.responseCallback;
        }
    }
};

export default ChatBotModule;