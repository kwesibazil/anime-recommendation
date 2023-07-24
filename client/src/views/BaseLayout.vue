<template>
  <div class="container-fluid d-flex h-100 px-0 w-100 position-relative">
    <NavBar class="col-3" />
    <main class="flex-grow-1 p-3 overflow-y-auto">
      <MainHeader />
      <!-- <HeroBanner /> -->
      <IconHamburger class=" bg-warning fill-white my-1"/>
    </main>

  </div>
</template>

<script setup>
  import NavBar from '@/components/NavBar.vue'
  import MainHeader from '@/components/MainHeader.vue';
  // import HeroBanner from '@/components/HeroBanner.vue'
  import IconHamburger from '@/components/icons/IconHamburger.vue';
</script>


<style scoped>
  .container-fluid{
    background-color: #131313;
  }

  main{
    /* width: auto; */
    overflow: hidden;
    border-left: .5px solid #ffffff2d;
  }

</style>



