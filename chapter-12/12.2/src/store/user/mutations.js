import * as MT from './types';

function saveUserName(state, userName) {
  state.name = userName;
}

export default {
  [MT.SAVE_USER]: saveUserName,
};
