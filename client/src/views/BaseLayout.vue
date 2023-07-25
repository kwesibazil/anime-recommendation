<template>
  <div class="container-fluid d-flex h-100 px-0 w-100 position-relative">
    <NavBar class="col-3" />

    <teleport to="#modal-root">
      <Modal>
        <keep-alive>
          <component :is="getState('modal')"></component>
        </keep-alive>
      </Modal>
    </teleport>

    <main class="flex-grow-1 p-3 pb-0">
      <MainHeader />
      <HeroWrapper />
      <AnimeWrapper />
    </main>

  </div>
</template>

<script setup>
  import NavBar from '@/components/NavBar.vue'
  import MainHeader from '@/components/MainHeader.vue';
  import HeroWrapper from '@/components/HeroWrapper.vue'
  import AnimeWrapper from '@/components/AnimeWrapper.vue';

  import Modal from '@/components/Modal.vue';


  import {mapGetters, mapMutations } from '@/libs/vuex'
  const {getState} = mapGetters()

</script>


<style scoped>
  .container-fluid{
    background-color: #131313;
  }

  main{
    /* width: auto; */
    overflow-x: hidden;
    border-left: .5px solid #ffffff2d;
  }


  main {
    width: 100%; 
    overflow-x: auto;
  }
  
  /* main::-webkit-scrollbar {   
    width: 10px;
  }main::-webkit-scrollbar-track {   
    background: var(--bs-dark);
  }main::-webkit-scrollbar-thumb, main::-webkit-scrollbar-thumb:hover { 
    background: var(--bs-danger) ;
  } */
  
  main::-webkit-scrollbar {    /* Hide scrollbar for Chrome, Safari and Opera */
    display: none;
  }

  main{  /* Hide scrollbar for IE, Edge and Firefox */
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }

</style>



