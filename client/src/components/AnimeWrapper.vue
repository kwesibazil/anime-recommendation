<template>
  <section class=" pt-2 mb-5 ">
    <p class="fs-5 text-white mb-3 mt-3 ">Anime List</p>
    <MainTable />
    <Pagination /> 
 
  </section>
</template>

<script setup>
  import MainTable from '@/components/MainTable.vue';
  import Pagination from '@/components/Pagination.vue';
</script>
