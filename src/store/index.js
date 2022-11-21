import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {
    setData(state, payload) {
      let obj = payload || {};
      for (let key in obj) {
        state[key] = obj[key];
      }
    },
  },
  getters: {
    userInfo: (state) => state.userInfo,
  },
  actions: {
    // 获取用户基本信息
    getUserInfo({ commit, state, dispatch }, type) {
      getUserInfoByToken().then((res) => {
        if (res && res.data) {
          commit("setUserInfo", res.data);
        }
      });
    },
  },
});
