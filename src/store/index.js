import Vue from 'vue';
import Vuex from 'vuex';

import mutations from './mutations.js';
import actions from './actions.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        news: [],
        jobs: [],
        ask: [],
    },

    // getters는 computed와 같다. 다만 store에 있는 것 뿐이다.
    getters: {
        fetchedAsk(state) {
            return state.ask;
        }
    },

    mutations,

    // 비동기 호출은 모두 Action에서 한다.
    // 거기에 받아온 데이터를 Mutation을 통해
    // state에 넣어주도록 상태관리가 되어있다.
    actions,
});