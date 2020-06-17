import MT from './types';

export default {
  voteFor({ commit }, candidate) {
    commit(MT.ADD_VOTE, candidate);
  },
  cancelVoteFor({ commit }, candidate) {
    commit(MT.REMOVE_VOTE, candidate);
  },
};
