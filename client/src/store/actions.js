
export default{

    async fetchAnime({commit}) {
      try {
        const res = await fetch('./data/anime.json')
        const anime = await res.json()
        commit('cleanData', {data: anime, state: 'anime'})
      } catch (err) {
          console.log(err);
      }
    },
}