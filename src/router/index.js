import Vue from 'vue'
import Router from 'vue-router'
import Default from '@/components/Default'
import Path from '@/page/Path'
import List from '@/page/List'
import Notebook from '@/page/Notebook'
import Blog from '@/page/Blog'
import Home from '@/page/Home'
import coursesVue from '@/page/courses/Vue'
import coursesNodejs from '@/page/courses/Nodejs'
import coursesWebpack from '@/page/courses/Webpack'
import CommitGit from '@/page/commit/Git'
import CommitWeixin from '@/page/commit/Weixin'
import Login from '@/page/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/default',
      name: 'Default',
      component: Default,
      children: [
        {
          path: '/home',
          name: 'Home',
          component: Home
        },
        {
          path: '/path',
          name: 'Path',
          component: Path
        },
        {
          path: '/list',
          name: 'List',
          component: List
        },
        {
          path: '/notebook',
          name: 'Notebook',
          component: Notebook
        },
        {
          path: '/blog',
          name: 'Blog',
          component: Blog
        },
        {
          path: '/courses-vue',
          name: 'coursesVue',
          component: coursesVue
        },
        {
          path: '/courses-nodejs',
          name: 'coursesNodejs',
          component: coursesNodejs
        },
        {
          path: '/courses-webpack',
          name: 'coursesWebpack',
          component: coursesWebpack
        },
        {
          path: '/commit-git',
          name: 'CommitGit',
          component: CommitGit
        },
        {
          path: '/commit-weixin',
          name: 'Login',
          component: CommitWeixin
        }
      ]
    }
  ]
})
