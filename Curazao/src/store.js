import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        developerName: 'Carlos Santana',
        shoppingCart: [{
                name: 'Jumbo Box of Teabags',
                quantity: 1,
                price: 350
            },
            {
                name: 'Packet of Fancy Biscuits',
                quantity: 1,
                price: 199
            },
        ]
    },
    getters: {
        developerName: state => state.developerName.toUpperCase()
    },
    mutations: {},
    actions: {}
});