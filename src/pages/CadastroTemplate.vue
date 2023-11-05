<template>
  <div class="columns">
    <div class="column is-2">
      <SidebarMenu />
    </div>
    <div class="column is-10">
      <div class="card">
        <div class="card-content">
          <div class="content">
            <div class="media-content">
              <p class="title is-4">Cadastro de Template</p>
              <br>
            </div>
            <form @submit.prevent="submitForm">
              <div class="field">
                <label class="label">Selecione tipo do Template</label>
                <div class="control">
                  <div class="select">
                    <select v-model="templateType">
                      <option value="">Selecione o tipo</option>
                      <option value="Tipo 1">Tipo 1</option>
                      <option value="Tipo 2">Tipo 2</option>
                      <option value="Tipo 3">Tipo 3</option>
                    </select>
                  </div>
                </div>
              </div>
              <!--<div class="field">
                <label class="label">Selecione o tipo do template ou do arquivo</label>
                <div class="control">
                  <CustomDropdown
                  type="select"
                  name="templateType"
                  v-model="templateType"
                  placeholder="Selecione o tipo"
                  :options="templateOptions"
                  />
                </div>
                </div>
                <br>
                -->
              <br>
              <div class="field">
                <div class="control">
                  <CustomInput
                    type="text"
                    v-model="templateTitle"
                    label="Título do Template"
                  />
                </div>
              </div>
              <br>
              <div class="field">
                <label class="label">Conteúdo</label>
                <div class="control">
                  <textarea class="textarea" v-model="templateContent"></textarea>
                </div>
              </div>
              <br>
              <div class="field">
                <div class="control">
                  <CustomButton
                    type="submit"
                    label="Enviar"
                    variant="is-success"
                    name="Enviar"
                    class="button is-success"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SidebarMenu from '@/components/SidebarMenu.vue';
import CustomInput from '@/components/CustomInput.vue';
import CustomButton from '@/components/CustomButton.vue';
//import CustomDropDown from '@/components/CustomDropDown.vue';

export default {
  data() {
    return {
      templateTitle: '',
      templateType: '',
      templateContent: '',
    };
  },
  methods: {
    submitForm() {
      console.log('Título do Template:', this.templateTitle);
      console.log('Tipo do Template:', this.templateType);
      console.log('Conteúdo do Template:', this.templateContent);
    },
  },
  components: {
    SidebarMenu,
    CustomInput,
    CustomButton,
    //CustomDropDown,
  },
};
</script>
