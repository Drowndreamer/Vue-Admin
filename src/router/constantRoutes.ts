export const constantRoutes = [
    {
      path: '/login',
      component: ()=> import ('@/views/login/index.vue'),
      name: 'login',
    },
    {
      path: '/',
      component: () => import('@/layout/index.vue'),
      name: 'layout',
      children:[
        {
          path:'/home',
          component: () => import('@/views/home/index.vue')
        }
      ]
    },    {
      path: '/404',
      component: () => import('@/views/404/index.vue'),
      name: '404',
    },

    {
      path: '/:patchMatch(.*)*',
      redirect: '/404',
      name: 'Any',
    }
  ]