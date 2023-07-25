import { createStore } from "vuex";
import {vuexSession} from  '@/libs/vuex-persistence'

import actions from './actions'
import mutations from './mutations'

const state = {
  end: 6,
  start: 0,
  anime: [],
  interval: 6,
  totalAnime: 0,
  isActive: false,
  navbar: false,
}

const getters = {
  getState: state => payload => state[payload],
  
}



export default createStore({
  state,
  actions,
  getters,
  mutations,
  plugins:[vuexSession.plugin]
})