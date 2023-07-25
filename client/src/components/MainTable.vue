<template>
  <div class="table-responsive border border-bottom-0">
    <table class="align-middle table table-dark table-striped table-hover mb-2 ">
      <thead >
        <tr>
          <th class="text-center" scope="col">Rank</th>
          <th scope="col"></th>
          <th scope="col">Title</th>
          <th scope="col">Status</th>
          <th scope="col">Source</th> 
          <th  scope="col">Episodes</th> 
          <th scope="col">Studio</th> 
        </tr>
      </thead>
      <tbody>
        <tr v-for="(anime, index) in getState('anime').slice(getState('start'), getState('end'))" :key="index">
          <td class="text-center"  >{{ anime.rank }}</td>
          <td><img class="rounded"  height="60" :src="anime.main_picture_medium " :alt="anime.title"></td>
          <td class="text-start">{{ anime.title }}</td>
          <td>{{anime.status}}</td>
          <td>{{ anime.source }}</td>
          <td  >{{anime.num_episodes }}</td>
          <td class="text-start">{{ anime.studios[0]}}</td>
        </tr>
      </tbody>
    </table>
   
  </div><!-- table container ends here -->
</template>

<script setup>
  import {mapGetters } from '@/libs/vuex'  
  const {getState} = mapGetters()
</script>