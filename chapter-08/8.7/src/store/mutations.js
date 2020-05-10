import MT from './types';

export default {
  [MT.ADD_VOTE](state, candidate) {
    if (state.votes[candidate]) {
      state.votes[candidate] += 1;
    } else {
      state.votes[candidate] = 1;
    }
  },
  [MT.REMOVE_VOTE](state, candidate) {
    if (state.votes[candidate]) {
      state.votes[candidate] -= 1;
    } else {
      state.votes[candidate] = 0;
    }
  },
};
