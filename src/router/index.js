import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import LoginView from '../views/LoginView.vue';
import AccessDeniedView from '../views/DeniedView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },

  {
    path: '/about',
    name: 'About',
    component: AboutView,
   
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/access-denied',
    name: 'AccessDenied',
    component: AccessDeniedView
  },
  {
    path:'/FireLogin',
    name:'FireLogin',
    component:FirebaseSigninView
  },
];


const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  if (to.name === 'About' && !isAuthenticated) {
    next('/login');  
  } else {
    next();  
  }
});
export default router;
