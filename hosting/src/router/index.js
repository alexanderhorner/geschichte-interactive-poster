import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import PlayerModal from '@/components/PlayerModal.vue'
import Wirtschaftswunder from '@/views/modals/Wirtschaftswunder.vue'
import VorraussetzungendesWirtschaftswunder from '@/views/modals/VorraussetzungendesWirtschaftswunder.vue'
import AntikommunismusVue from '@/views/modals/Antikommunismus.vue'
import PageNotFound from '@/views/PageNotFound.vue'
import Währungsreform from '@/views/modals/Währungsreform.vue'
import IntegrationderVertriebenen from '@/views/modals/IntegrationderVertriebenen.vue'
import VerwestlichungundAmerikanisierung from '@/views/modals/VerwestlichungundAmerikanisierung.vue'
import HerrSchmittVideo from '@/views/modals/HerrSchmittVideo.vue'

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
        },
        {
          path: "Antikommunismus",
          component: AntikommunismusVue
        },
        {
          path: "Währungsreform",
          component: Währungsreform
        },
        {
          path: "Integration-der-Vertriebenen",
          component: IntegrationderVertriebenen
        },
        {
          path: "Verwestlichung-und-Amerikanisierung",
          component: VerwestlichungundAmerikanisierung
        },
        {
          path: "Herr-Schmitt-Video",
          component: HerrSchmittVideo
        }
      ]
    },
    { path: '/:pathMatch(.*)*', component: PageNotFound },
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
