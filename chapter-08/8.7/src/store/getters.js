export default {
  allVotes: state => state.votes,
  voteByName: state => candidate => state.votes[candidate] || 0,
};
