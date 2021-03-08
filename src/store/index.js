import Vue from 'vue';
import Vuex from 'vuex';
import {fetchNewsList} from '../api/index.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        news: []
    },

    mutations: {
        // SET_NEWS: function() {}의 축약형
        SET_NEWS(state, news) {
            state.news = news;
        }
    },
    // 비동기 호출은 모두 Action에서 한다.
    // 거기에 받아온 데이터를 Mutation을 통해
    // state에 넣어주도록 상태관리가 되어있다.
    actions: {
        FETCH_NEWS (contex) {
            fetchNewsList()
            .then(response => {
                console.log(response);
                contex.commit('SET_NEWS', response.data);
            })
            .catch(error => {
                console.log(error);
            });
        }
    }
});