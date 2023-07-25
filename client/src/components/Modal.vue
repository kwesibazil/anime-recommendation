<template>
  <transition mode="out-in" name="nested">
    <div v-if="getState('isActive')" @click="shakeX"  class="overlay">
      <div :class="{'border border-3 border-danger': disabled }" class="modal-container d-flex flex-column shadow bg-dark px-3 px-sm-4 rounded-3 h-100">
        <button  @click="toggleModal" class="btn-close btn-close-white align-self-end pt-3 pb-2 my-1" type="button" aria-label="Close"></button>
        <ModalContent />
      </div><!-- modal container ends here -->
    </div><!-- overlay ends here -->
  </transition>
</template>

<script setup>
  import { ref } from 'vue'
  import {mapGetters, mapMutations } from '@/libs/vuex'
  import ModalContent from '@/components/ModalContent.vue';

  const {toggleModal} = mapMutations()
  const {getState} = mapGetters()
  const disabled = ref(false)

  const shakeX  = e => {
    if(e.target === e.currentTarget){
      disabled.value = true
      setTimeout(_ => disabled.value = false, 1000 )
    }
  }

</script>

<style scoped>
  .modal-slot::-webkit-scrollbar {
    display: none;
  }
  .overlay{
    top: 0;
    z-index: 3;
    width: 100vw;
    height: 100vh;
    position: fixed;
    overflow-x: auto ;
    background-color: rgba(0, 0, 0, 0.4);
  }

  .modal-container{
    top: 10%;
    z-index: 4;
    max-width: 80%;
    min-width: 320px;
    max-height: 60%;
    min-height: 400px; 
    position: relative;
    margin-left: auto;
    margin-right: auto;
    overflow-y:auto;
  }

  @media (min-width:576px){
    .modal-container{
      top: 5%;
      max-height: 87%;
    }
  }

  .modal-container::-webkit-scrollbar {
    width: 7px;
  }

  /* Track */
  .modal-container::-webkit-scrollbar-track {
    background: rgb(187, 185, 185); ;
  }

  /* Handle*/
  .modal-container::-webkit-scrollbar-thumb, .content-box::-webkit-scrollbar-thumb:hover {
    background: var(--bs-secondary);
  }


  .nested-enter-active, .nested-leave-active {
    transition: all .3s ease-in-out;
  }.nested-enter-from, .nested-leave-to {
    opacity: 0;
  }

  /* delay leave of parent element and  delay enter of nested element */ 
  .nested-leave-active, .nested-enter-active .modal-container{ 
    transition-delay: 0.25s;
  }.nested-enter-active .modal-container, .nested-leave-active .modal-container { /* transition nested elements */
    transition: all 0.3s ease-in-out;
  }.nested-enter-from .modal-container, .nested-leave-to .modal-container {
    transform: translateY(-115%);
    opacity: .1;
  }

</style>