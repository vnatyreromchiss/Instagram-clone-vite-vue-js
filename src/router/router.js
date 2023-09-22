import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '../pages/HomePage.vue';
import MessengerPage from '../pages/MessengerPage.vue';
import AddNewPostPage from '../pages/AddNewPostPage.vue';
import FindPeoplePage from '../pages/FindPeoplePage.vue';
import LikesPage from '../pages/LikesPage.vue';
import ProfilePage from '../pages/ProfilePage.vue';
import EditProfile from '../pages/EditProfilePage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/messenger',
      name: 'messenger',
      component: MessengerPage
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../pages/AboutPage.vue')
    },
    {
      path: '/addNewPost',
      name: 'addNewPost',
      component: AddNewPostPage
    },
    {
      path: '/findPeople',
      name: 'findPeople',
      component: FindPeoplePage
    },
    {
      path: '/likes',
      name: 'likes',
      component: LikesPage
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfilePage
    },
    {
      path: '/editProfile/:imageUrl?',
      name: 'editProfile',
      component: EditProfile
    },
  ]
})

export default router
