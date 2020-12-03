import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '@/views/home/home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/permits',
    name: 'permits',
    component: () => import('@/views/permits/permits.vue'),
    meta: { title: 'Permisos' }
  },
  {
    path: '/permits-types',
    name: 'permits-types',
    component: () => import('@/views/permits-types/permits-types.vue'),
    meta: { title: 'Tipos de permisos' }
  },
  {
    path: '/permit-type',
    name: 'permit-type',
    component: () => import('@/views/permits-types/permit-type/permit-type.vue'),
    meta: { title: 'Agregar tipo de permiso' }
  },
  {
    path: '/permit-type/:id',
    name: 'permit-type-edit',
    component: () => import('@/views/permits-types/permit-type/permit-type.vue'),
    meta: { title: 'Editar tipo de permiso' }
  },
  {
    path: '/permit',
    name: 'permit',
    component: () => import('@/views/permits/permit/permit.vue'),
    meta: { title: 'Solcitar permiso' }
  },
  {
    path: '/permit/:id',
    name: 'permit-edit',
    component: () => import('@/views/permits/permit/permit.vue'),
    meta: { title: 'Editar solicitud de permiso' }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
