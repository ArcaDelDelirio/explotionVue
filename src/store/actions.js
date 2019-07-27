import ping from 'node-http-ping';

export default {
  getServerStatus(context) {
    ping('https://api-explotion.herokuapp.com/')
      .then(time => {
        context.commit('takeState', time);
      })
      // eslint-disable-next-line no-console
      .catch(() => console.log('Failed to ping server'));
  },
};
