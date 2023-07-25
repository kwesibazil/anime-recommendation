export default{
  toggleNav (state) {
    state.navbar = !state.navbar
  },
  
  toggleModal (state) {
    state.isActive = !state.isActive
  },

  setState(state, payload){
    state[payload.state] = payload.data
  },

  increment(state){
    if(state.end >= state.totalAnime) return

    state.start = state.start + state.interval
    state.end = state.end + state.interval
  },

  decrement(state){
    if(state.start == 0) return

    state.start = state.start - state.interval
    state.end = state.end - state.interval
  },

  firstColumn(state){
    state.start = 0
    state.end = 6
  },

  LastColumn(state){
    state.start = state.totalAnime - (state.totalAnime % state.interval)
    state.end = state.totalAnime
  },




  cleanData(state, payload){
    payload.data.forEach(data => {
      data.genres = data.genres.replace(/[^a-z0-9,]/gi, "")
      data.genres = data.genres.split(",")  
      data.studios = data.studios.replace(/[^a-z0-9,]/gi, "")
      data.studios = data.studios.split(",")   
      data.status =  data.status === 'finished_airing' ? 'Finished' : "On-going"
    })
    state.totalAnime = payload.data.length
    state[payload.state] = payload.data
  }
}

