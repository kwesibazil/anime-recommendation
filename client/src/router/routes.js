
const routes = [
  {
    path: '/',
    name: 'home',
    component:() => import('@/views/BaseLayout.vue')
    // children:[
    //   {
    //     path: '/',
    //     name: 'dashboard',
    //     component: () => import('@/views/partials/Dashboard.vue'), 
    //   }
    // ]
  }
]

export {routes}