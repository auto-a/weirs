import Vue from 'vue'
import Router from 'vue-router'
import sy from '@/components/sy'
import top from '@/components/top'
import left from '@/components/left'
import jibenzl from '@/components/jibenzl'
import WageN from '@/components/WageN'
import WageMs from '@/components/WageMs'
import zhujian from '@/components/zhujian'
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
          path:'/components',
          name:'jibenzl',
          components:jibenzl,
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
          }
  ]
})
