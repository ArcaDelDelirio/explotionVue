
import Vue from 'vue';
import Vuex from 'vuex';
import ping from 'node-http-ping';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userLogged: false,
    apiState: false,
    responseTime: 0,
  },
  mutations: {
    getServerStatus(state, time) {
      state.responseTime = time;
      state.apiState = (time > 0);
    },
  },
  actions: {
    getServerStatus(context) {
      ping('https://api-explotion.herokuapp.com/')
        .then((time) => {
          context.commit('getServerStatus', time);
        })
        .catch(() => console.log('Failed to ping server'));
    },

  },
});
