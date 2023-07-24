<template>
  <header class="d-flex justify-content-between align-items-center ">
    <div class="d-flex col-sm-3 col-md-3 col-lg-2 align-items-center">
      <IconHamburger class="fill-white my- 1 me-2  d-md-none"/>
      <span class=" text-white fs-3 bw-bolder mb-1">Dashboard</span>
    </div>
    <form class="col-sm-6 col-md col-lg d-flex justify-content-center" @submit.prevent="submitForm">
      <input class="shadow-sm" type="search" placeholder="Search...">
    </form>
    <button class="col-md-2 col-md-3 col-lg-4 btn btn-outline-danger me-4 py-1" type="button">Try for Free</button>
    <button class="d-none d-lg-block col-md-2 col-md-3 col-lg-4 btn btn-danger py-1" type="button">Login</button>
  </header>
</template>


<script setup>
  import {ref} from 'vue'
  import IconHamburger from '@/components/icons/IconHamburger.vue';

  const formData = ref('')

  const submitForm = async() => {
    const userInput = formData.value  //👈 sanitize user input using Dompurify
    console.log(userInput)
  }

</script>


<style scoped>

  button{
    max-width: 99px;
  }

  input{
    width: 60%;
    color: white;
    max-width: 550px;
    border-radius: 10px;
    padding: 5px 14px 5px 40px;
    border: 1px solid #2F2F2F;
    transition: all .5s linear;
    background: #2F2F2F url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E") no-repeat 13px center;
  }

  input:focus, input:active{
    width: 75%;
    outline: none;
    transition: all .5s linear;
    border: 2px solid var(--bs-secondary);
  }

  @media (max-width:576px) {
    form, input{
      display: none;
    }
  }
</style>