import Vue from 'vue'
import Router from 'vue-router'
import sy from '@/components/sy'
import top from '@/components/top'
import left from '@/components/left'
import jibenzl from '@/components/jibenzl'
import WageN from '@/components/WageN'
import WageMs from '@/components/WageMs'
import shiyan from '@/components/shiyan'
import zhujian from '@/components/zhujian'
import jichu from '@/components/jichu'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'sy',
      component: sy
    },
       {
        path: '/components',
        name: 'top',
        component: top
      },

          {
          path:'/components',
          name:'left',
          components:left,
          },
          {
          path:'/components/jibenzl',
          name:'jibenzl',
          components: () => import('@/components/left'),
          },
          {
          path:'/components',
          name:'WageN',
          components:WageN,
          },
          {
          path:'/components',
          name:'WageMs',
          components:WageMs,
          },
          {
          path:'/components',
          name:'zhujian',
          components:zhujian,
          },
          {
          path:'/components',
          name:'shiyan',
          components:shiyan,
          },
          {
          path:'/components',
          name:'jichu',
          components:jichu,
          }
  ]
})
