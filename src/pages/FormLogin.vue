<template>
  <div class="columns is-multiline">
    <div class="column is-1">
    </div>
    <div class="column is-10">
      <div class="columns">
        <div class="column">
          <div class="card">
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-4">Bem-vindo de volta!</p>
                  <p class="subtitle is-6">Faça seu login</p>
                </div>
              </div>

              <div class="content">
                <form @submit.prevent="submitForm">
                  <CustomInput
                    type="text"
                    v-model="login"
                    label="E-mail"
                  /><br />

                  <CustomInput
                    type="password"
                    v-model="senha"
                    label="Senha"
                  /><br /><br />

                  <CustomButton
                    type="submit"
                    label="Entrar"
                    variant="is-success"
                    name="Entrar"
                    class="button is-success"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-4">Ainda não possui cadastro?</p>
                </div>
              </div>

              <div class="content">
                <CustomButton
                  label="Cadastre-se"
                  variant="is-success"
                  type="button"
                  name="Cadastrarse"
                  class="button is-success"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomInput from '@/components/CustomInput.vue';
import CustomButton from '@/components/CustomButton.vue';

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
  },
  components: {
    CustomInput,
    CustomButton,
  },
};
</script>
