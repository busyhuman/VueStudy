import axios from 'axios';

// HTTP Request & Response와 관련된 기본 설정
const config = {
    baseurl: 'https://api.hnpwa.com/v0/'
}

// 2. API 함수들을 정리
function fetchNewsList() {
    // return axios.get(config.baseurl + 'news/1.json');
    return axios.get(`${config.baseurl}news/1.json`);
}

function fetchAskList() {
    return axios.get(`${config.baseurl}ask/1.json`);
}

function fetchJobsList() {
    return axios.get(`${config.baseurl}jobs/1.json`);
}

function fetchUserInfo(username) {
    return axios.get(`${config.baseurl}user/${username}.json`);
}

function fetchCommentItem(id) {
    return axios.get(`${config.baseurl}item/${id}.json`);
}
export {
    fetchNewsList,
    fetchAskList,
    fetchJobsList,
    fetchUserInfo,
    fetchCommentItem,
}