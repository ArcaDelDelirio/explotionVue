import ping from 'node-http-ping';

export default {
  getServerStatus(context) {
    ping('https://api-explotion.herokuapp.com/')
      .then((time) => {
        context.commit('takeState', time);
      })
      .catch(() => console.log('Failed to ping server'));
  },
};
