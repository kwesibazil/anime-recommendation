import { createStore } from "vuex";
import {vuexSession} from  '@/libs/vuex-persistence'


import state from './state'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'


export default createStore({
  state,
  actions,
  getters,
  mutations,
  // modules:{

  // },
  plugins:[vuexSession.plugin]
})