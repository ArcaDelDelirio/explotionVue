export default {
  takeState(state, time) {
    state.responseTime = time;
    state.apiState = (time > 0);
  },
};
