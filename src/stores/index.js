import Vue from 'vue'
import Vuex from 'vuex'
import VehicleModule from '@/stores/VehicleModule';
import ChatBotModule from '@/stores/ChatBotModule';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        vehicle: VehicleModule,
        chatbot: ChatBotModule,
    }
});