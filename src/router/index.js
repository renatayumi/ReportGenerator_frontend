import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  // Defina suas rotas aqui
];

const router = new VueRouter({
  routes,
  mode: 'history', // Configurar o modo de histórico
});

export default router;