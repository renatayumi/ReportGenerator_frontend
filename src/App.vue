<template>
  <div>
    <FormLogin/>
  </div>
</template>

<script>
import FormLogin from './pages/FormLogin.vue'

export default {
  data() {
    return {
      login: '',
      senha: '',
    };
  },
  methods: {
    submitForm() {
      console.log('Login:', this.login);
      console.log('Senha:', this.senha);
    },
    cadastroHandler() {
      // Lógica para redirecionar para a página de cadastro
    },
  },
  name: 'App',
  components: {
    FormLogin,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
