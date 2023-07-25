<template>
  <div class="w-auto">
    <div @click="toggleNav" class="overlay-box" :class="{'overlay-box-collapse': getState('navbar')}"></div>
    <nav class="navbar navbar-expand-md navbar-dark flex-column pb-0"
      :class="{'navbar-collapse': getState('navbar')}"
    > 
      <ul class="navbar-nav flex-grow-1 flex-column w-100 px-3">
        <li class="nav-item mb-3">
          <a class="nav-link text-light fs-4 "><IconLogo class="fill-danger" />LOGO</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active"><IconHome />Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link"><IconGrid />Library</a>
        </li>
        <li class="nav-item">
          <a class="nav-link"><IconBookHalf />Recommendations</a>
        </li>
        <li class="nav-item bottom">
          <a class="nav-link"><IconBoxRight />Logout</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
  import {mapMutations, mapGetters} from '@/libs/vuex'
 
  import IconLogo from '@/components/icons/IconLogo.vue'
  import IconHome from '@/components/icons/IconHome.vue'
  import IconGrid from '@/components/icons/IconGrid.vue'
  import IconBoxRight from '@/components/icons/IconBoxRight.vue'
  import IconBookHalf from '@/components/icons/IconBookHalf.vue'

  const {getState} = mapGetters()
  const {toggleNav} = mapMutations()
</script>


<style scoped> 
  svg{
    margin-right: 10px;
  }
  
  
  .nav-item{
    overflow: hidden;
    padding: 3px 12px;
    border-radius: 10px;
    margin-bottom: 11px;
  }.nav-item:hover{
    background-color: #fdfdfd36;
  }.nav-item:first-child:hover{
    background-color: #ff000000;
  }

  .bottom, .bottom:hover{
    color: white; 
    margin-top: auto;
    border-radius: 5px;
    margin-bottom: 5px ; 
    background-color: #eb0f0f94;
  }

  .navbar{
    width: auto;
    width: 245px;
    height: 100vh;
    overflow:hidden; 
    transform: translate(0);
    transition: all .3s linear;  
    background-color:  #131313;
  }

  .navbar-collapse{
    width: 0;
    transform: translate(-100%);
    transition: all .3s linear;  
  } 

  
@media (max-width:767px){
  .navbar{
    z-index: 5;
    position: absolute;
  }
  .navbar-collapse{
    transform: translate(-100%);
    transition: all .3s linear;  
  } 

  .overlay-box{
    z-index: 3;
    width: 100vw;
    height: 100vh;
    position: fixed;
    overflow-x: auto ;
    background-color: #080808d5;
  }
  .overlay-box-collapse{
    width: 0%;
  }

}

/* backup
 @media (max-width:767px){
  .navbar{
    z-index: 5;
    height: 100vh;
    overflow:hidden; 
    width: 250px;
    position: absolute;
    transform: translate(0);
    transition: all .3s linear;  
    background-color:  #131313;
    
  }
  .navbar-collapse{
    transform: translate(-100%);
    transition: all .3s linear;  
  } 

  .overlay-box{
    z-index: 3;
    width: 100vw;
    height: 100vh;
    position: fixed;
    overflow-x: auto ;
    background-color: #080808d5;
  }
  .overlay-box-collapse{
    width: 0%;
  }

} */
</style>



