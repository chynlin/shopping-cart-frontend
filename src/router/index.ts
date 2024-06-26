import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Default',
        component: () => import('@/layout/Default.vue'),
        children: [
            {
                path: '/',
                name: 'Home',
                    component: () => import('@/views/Home.vue'),
              },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
