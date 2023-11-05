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
                  <p class="title is-4">Crie sua conta!</p>
                </div>
              </div>

              <div class="content">
                <form @submit.prevent="submitForm">
                  <CustomInput
                    type="text"
                    v-model="nome"
                    label="Nome Completo"
                  /><br />

                  <CustomInput
                    type="text"
                    v-model="email"
                    label="E-mail"
                  /><br />

                  <CustomInput
                    type="password"
                    v-model="senha"
                    label="Senha"
                  /><br /><br />

                  <CustomButton
                    type="submit"
                    label="Cadastrar"
                    variant="is-success"
                    name="cadastrar"
                    class="button is-success"
                  />
                </form>
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
      nome: '',
      email: '',
      senha: '',
    };
  },
  methods: {
    submitForm() {
      console.log('Nome:', this.nome);
      console.log('Email:', this.email);
      console.log('Senha:', this.senha);
    },
  },
  components: {
    CustomInput,
    CustomButton,
  },
};
</script>
