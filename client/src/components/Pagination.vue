<template>
  <div class="border border-top-0 bg-dark d-flex justify-content-end align-items-center text-light fw-bold w-100 py-3">
    <span class="me-4 ">
      <b>{{getState('start')+1}}</b> to  
      <b>{{getState('end')}} </b> of 
      <b>{{ getState('totalAnime')}}</b>
    </span>

    <IconChevronleft @click="firstColumn" class="me-2" />
    <IconArrowLeft @click="decrement" class="me-2"/>
    
    <span class="mx-2 ">Page 
      <b>{{Math.ceil(getState('end')/getState('interval'))}}</b> of 
      <b>{{Math.ceil(getState('totalAnime')/getState('interval'))}}</b>
    </span>
    <IconArrowRight @click="increment" class="mx-2"/>
    <IconChevronRight @click="LastColumn" class="me-4" />
  </div><!-- pagination container ends here -->
</template>

<script setup>
  import {mapGetters, mapMutations } from '@/libs/vuex'  
  import IconArrowLeft from '@/components/icons/IconArrowLeft.vue'
  import IconArrowRight from '@/components/icons/IconArrowRight.vue'
  import IconChevronleft from '@/components/icons/IconChevronleft.vue'
  import IconChevronRight from '@/components/icons/IconChevronRight.vue'


  const {getState} = mapGetters()
  const {increment, decrement,  firstColumn, LastColumn} = mapMutations()

  
  


</script>