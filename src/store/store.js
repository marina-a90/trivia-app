import Vue from 'vue'
import Vuex from 'vuex'

import { TriviaModule } from './modules/TriviaModule';
import { ChuckModule } from './modules/ChuckModule';

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        trivia: TriviaModule,
        chuck: ChuckModule
    }
})