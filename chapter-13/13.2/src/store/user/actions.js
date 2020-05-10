import * as MT from './types';

export function saveUser({
  commit,
}, userName) {
  commit(MT.SAVE_USER, userName);
}

export default {
  saveUser,
};
