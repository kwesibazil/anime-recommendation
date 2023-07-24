
export default{

    async fetchPopularAnime({commit}) {
      try {
        console.log('kee');
        const res = await fetch('./data/anime.json')
        const anime = await res.json()
        commit('cleanData', {data: anime, state: 'popularAnime'})
      } catch (err) {
          console.log(err);
      }
    },
}