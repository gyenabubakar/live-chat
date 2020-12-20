import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome'
import Chatroom from "../views/Chatroom";
import {authRef} from "../firebase/config";

const requireAuth = (to, from, next) => {
  const user = authRef.currentUser

  if (!user) {
    next({ name: 'Welcome' })
    return
  }
  next()
}

const requireNoAuth = (to, from, next) => {
  let user = authRef.currentUser
  if (user) {
    next({ name: 'Chatroom' })
    return
  }
  next()
}

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome,
    beforeEnter: requireNoAuth
  },
  {
    path: '/chatroom',
    name: 'Chatroom',
    component: Chatroom,
    beforeEnter: requireAuth
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
