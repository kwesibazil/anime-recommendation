<template>
  <section class="d-flex text-white ms-md-2 ">
    <div class="anime-card col-9 col-sm-7 d-flex text-white me-4 my-2 mb-3"  v-for="(anime, index) in getState('anime').slice(0,6)" :key="index">
      <img class="col-12 col-md-6 col-lg-5 rounded my-auto "  height="300" :src="anime.main_picture_large" :alt="anime.title">
      <div class="anime-card-body col d-none d-md-block body w-100 text-white px-3 py-2 ">
        <p class="fs-5 fw-bold mb-2 mt-lg-3">{{anime.title}}</p>
        <p class="anime-card-text fs-7 mb-4"> {{anime.synopsis}}</p>
          <button class="btn btn-sm btn-danger rounded-pill mb-4 py-1 px-2 ">
            <IconPlay />watch now
          </button>
        <div>
          <span class="me-2 mb-2 badge text-bg-success px-1" v-for="(genre, index) in anime.genres" :key="index">
            {{genre}}
          </span>
        </div>
      </div>
    </div><!-- anime-card ends here -->
  </section><!-- root container ends here -->
</template>


<script setup>
  import {onMounted} from 'vue'
  import {mapGetters, mapActions } from '@/libs/vuex'  
  import IconPlay from '@/components/icons/IconPlay.vue'

  const {getState} = mapGetters()
  const {fetchAnime} = mapActions()
  onMounted(() => fetchAnime())

</script>


<style scoped>
  .anime-card {
    height: 300px;
    max-width: 580px;
  }

  .anime-card-body {
    border-radius: 0 8px 8px 0;
    background-color: #2F2F2F ;
    overflow-y: hidden;
  }
  .anime-card-text{
    max-height: 39%;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4; /* start showing ellipsis when 3rd line is reached */
    white-space: pre-wrap; /* let the text wrap preserving spaces */
  }

  section {
    width: 100%; 
    overflow-x: auto;
  } section::-webkit-scrollbar {   /* size */
    height: 10px;
  }section::-webkit-scrollbar-track {   /* Track */
    background: var(--bs-dark);
  }section::-webkit-scrollbar-thumb, section::-webkit-scrollbar-thumb:hover { /* Handle*/
    background: var(--bs-danger) ;
  }
  
</style>