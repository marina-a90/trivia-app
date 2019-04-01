import { chuckService } from '@/services/ChuckService';

export const ChuckModule = {
  state: {
    jokes: []
  },
  getters: {
    jokes(state) {
      return state.jokes;
    }
  },
  mutations: {
    getJokes(state, joke) {
      state.jokes.unshift(joke);
    }
  },
  actions: {
    getJokes(state) {
      chuckService.getRandomJoke()
        .then(response => {
          return state.commit('getJokes', response);
        }).catch(err => {
            console.log(err);
        });
    }
  },
}