export default{
  toggleNav (state) {
    state.isHidden.navbar = !state.isHidden.navbar
    // const body = document.querySelector("body")
    // body.classList.toggle('overflow-hidden')
  },

  setState(state, payload){
    state[payload.state] = payload.data
  },

  cleanData(state, payload){
    const genres = []

    
    payload.data.forEach(data => {
      // const temp = data.split(",")
      // genres.push(temp)
    })
    console.log(genres);
  }
}
