import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard/Dashboard'
import Calendar from '@/components/Calendar/Calendar'
import mailing from '@/components/Mailing/Mailing'
import LobiPanel from '@/components/LobiPanel/LobiPanel'
import LobiBox from '@/components/LobiBox/LobiBox'
import LobiTab from '@/components/LobiTab/LobiTab'
import LobiList from '@/components/LobiList/LobiList'
import Chartjs from '@/components/Chart.Js/ChartJs'
import Morrisjs from '@/components/Morris Chart/MorrisJs'
import InlineCharts from '@/components/InlineCharts/InlineCharts'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/lobipanel',
      name: 'lobipanel',
      component: LobiPanel
    },
    {
      path: '/lobibox',
      name: 'lobibox',
      component: LobiBox
    },
    {
      path: '/lobitab',
      name: 'lobitab',
      component: LobiTab
    },
    {
      path: '/lobilist',
      name: 'lobilist',
      component: LobiList
    },
    {
      path: '/chartjs',
      name: 'chartjs',
      component: Chartjs
    },
    {
      path: '/morrisjs',
      name: 'Morris Chart',
      component: Morrisjs
    },
    {
      path: '/inline-charts',
      name: 'inline chartst',
      component: InlineCharts
    },
    {
      path: '/calendar',
      name: 'Calendar',
      component: Calendar
    },
    {
      path: '/mailing',
      name: 'mailing',
      component: mailing
    },
    {
      path: '/',
      name: 'HelloWorld',
      redirect: 'dashboard'
    }
  ]
})
