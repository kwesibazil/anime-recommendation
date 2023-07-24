import VuexPersistence from 'vuex-persist'


const vuexSession = new VuexPersistence({
  storage: window.sessionStorage,           //👈 storage location
})

export {vuexSession}

