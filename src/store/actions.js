import { fetchAskList, fetchUserInfo, fetchJobsList, fetchNewsList, fetchCommentItem, fetchList } from '../api/index.js';

export default {
    // promise
    // FETCH_NEWS(context) {
    //     return fetchNewsList()
    //         .then(response => {
    //             // Mutations 호출
    //             context.commit('SET_NEWS', response.data);
    //             return response;
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });
    // },

    // async
    async FETCH_NEWS(context) {
        const response = await fetchNewsList();
        context.commit('SET_NEWS', response.data);

        // 결과 값을 반환해줘야 FETCH_NEWS를 실행하고나서 그 다음에 처리를 이어서 할 수 있다. (체이닝)
        return response;
    },



    FETCH_JOBS({ commit }) {
        return fetchJobsList()
            .then(({ data }) => {
                commit('SET_JOBS', data);
            })
            .catch(error => {
                console.log(error);
            });
    },

    FETCH_ASK({ commit }) {
        return fetchAskList()
            .then(({ data }) => {
                commit('SET_ASK', data);
            })
            .catch(error => {
                console.log(error);
            });
    },

    FETCH_USER({ commit }, name) {
        return fetchUserInfo(name)
            .then(({ data }) => {
                commit('SET_USER', data);
            })
            .catch(error => {
                console.log(error);
            });
    },

    FETCH_ITEM({ commit }, id) {
        return fetchCommentItem(id)
            .then(({ data }) => {
                commit('SET_ITEM', data);
            })
            .catch(error => {
                console.log(error);
            });
    },

    FETCH_LIST({ commit }, pageName) {
        return fetchList(pageName)
            .then((response) => {
                commit('SET_LIST', response.data);
                return response;
            })
            .catch(error => console.log(error));
    },
}