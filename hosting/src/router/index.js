import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import PlayerModal from '@/components/PlayerModal.vue'
import Wirtschaftswunder from '../views/modals/Wirtschaftswunder.vue'
import VorraussetzungendesWirtschaftswunder from '../views/modals/VorraussetzungendesWirtschaftswunder.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: "playertest",
          component: PlayerModal,
          props: {
            mp3src: import('@/assets/audio/file_example_MP3_1MG.mp3')
          }
        },
        {
          path: "Wirtschaftswunder",
          component: Wirtschaftswunder
        },
        {
          path: "Vorraussetzungen-des-Wirtschaftswunder",
          component: VorraussetzungendesWirtschaftswunder
        }
      ]
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
