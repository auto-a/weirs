import Vue from 'vue'
import Router from 'vue-router'
import sy from '@/components/sy'
import top from '@/components/top'
import jibenzl from '@/components/jibenzl'
import WageN from '@/components/WageN'
import WageMs from '@/components/WageMs'
import shiyan from '@/components/shiyan'
import zhujian from '@/components/zhujian'
import jichu from '@/components/jichu'
import login from '@/components/login'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'sy',
      component: sy
    },
    {
      path: '/top',
      name: 'top',
      component: top
    },
    {
      path: '/jibenzl',
      name: 'jibenzl',
      component: jibenzl
    },
    {
      path: '/WageN',
      name: 'WageN',
      component: WageN
    },
    {
      path: '/WageMs',
      name: 'WageMs',
      component: WageMs
    },
    {
      path: '/zhujian',
      name: 'zhujian',
      component: zhujian
    },
    {
      path: '/shiyan',
      name: 'shiyan',
      component: shiyan,
    },
    {
      path: '/jichu',
      name: 'jichu',
      component: jichu,
    },
    {
      path: '/login',
      name: 'login',
      component: login,
    }
  ]
})
