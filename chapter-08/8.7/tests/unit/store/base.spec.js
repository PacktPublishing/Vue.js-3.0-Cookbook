import { createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import state from '../../../src/store/state';
import mutations from '../../../src/store/mutations';
import actions from '../../../src/store/actions';
import getters from '../../../src/store/getters';
import MT from '../../../src/store/types';

const createStore = () => ({
  state,
  mutations,
  actions,
  getters,
});
describe('Vuex Store Unit Test', () => {
  test('check if store is being created correctly', () => {
    const localVue = createLocalVue();
    localVue.use(Vuex);

    const store = new Vuex.Store(createStore());

    expect(store.state.votes.a).toBe(0);
    expect(store.state.votes.b).toBe(0);
  });

  test('check if mutations are working correctly', () => {
    const localVue = createLocalVue();
    localVue.use(Vuex);
    const store = new Vuex.Store(createStore());

    const candidate = 'Heitor';

    store.commit(MT.ADD_VOTE, candidate);

    expect(store.state.votes[candidate]).toBe(1);

    store.commit(MT.REMOVE_VOTE, candidate);

    expect(store.state.votes[candidate]).toBe(0);
  });

  test('check if static getters are working correctly', () => {
    const localVue = createLocalVue();
    localVue.use(Vuex);
    const store = new Vuex.Store(createStore());

    const candidate = 'Heitor';

    store.commit(MT.ADD_VOTE, candidate);

    expect(store.getters.allVotes.a).toBe(0);
    expect(store.getters.allVotes.b).toBe(0);

    expect(store.getters.voteByName(candidate)).toBe(1);

    store.commit(MT.REMOVE_VOTE, candidate);

    expect(store.getters.voteByName(candidate)).toBe(0);
  })
});
