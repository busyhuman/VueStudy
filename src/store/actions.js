import {
  fetchAskList,
  fetchUserInfo,
  fetchJobsList,
  fetchNewsList,
  fetchCommentItem,
  fetchList,
} from '../api/index.js';

export default {
  // async
  async FETCH_NEWS(context) {
    const response = await fetchNewsList();
    context.commit('SET_NEWS', response.data);

    // 결과 값을 반환해줘야 FETCH_NEWS를 실행하고나서 그 다음에 처리를 이어서 할 수 있다. (체이닝)
    return response;
  },

  async FETCH_JOBS({ commit }) {
    try {
      const response = await fetchJobsList();
      commit.commit('SET_JOBS', response.data);
      return response;
    } catch (error) {
      console.log(error);
    }
  },

  async FETCH_ASK(context) {
    const response = await fetchAskList();
    context.commit('SET_ASK', response.data);
    return response;
  },

  async FETCH_USER({ commit }, name) {
    const response = await fetchUserInfo(name);
    commit('SET_USER', response.data);
    return response;
  },

  async FETCH_ITEM({ commit }, id) {
    const response = await fetchCommentItem(id);
    commit('SET_ITEM', response.data);
    return response;
  },

  async FETCH_LIST({ commit }, pageName) {
    const response = await fetchList(pageName);
    commit('SET_LIST', response.data);
    return response;
  },
};
