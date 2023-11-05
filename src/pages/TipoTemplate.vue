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
              <p class="title is-4">Cadastro de Tipo de Template</p>
              <br>
            </div>
            <form @submit.prevent="submitForm">
              <div class="field">
                <label class="label">Selecione o tipo do template ou do arquivo</label>
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
              <br> 
              <div class="field">
                <label class="label">Selecione o template</label>
                <div class="control">
                  <div class="select">
                    <select v-model="nameType">
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
                <div class="field">
                <label class="label">Selecione o template</label>
                <div class="control">
                  <CustomDropdown
                  type="select"
                  name="nameType"
                  v-model="nameType"
                  placeholder="Selecione o tipo"
                  :options="NameTypeOptions"
                  />
                </div>
              </div>-->
              <br>
              <div class="field is-grouped is-grouped-centered">
                <div class="field">
                  <label class="label">Entrada de Dados</label>
                  <div class="file has-name">
                    <label class="file-label">
                      <input
                        class="file-input"
                        type="file"
                        name="file"
                        @change="handleFileChange"
                      />
                      <span class="file-cta">
                        <span class="file-label">
                          Selecione um arquivo
                        </span>
                      </span>
                      <span class="file-name">
                        {{ fileName }}
                      </span>
                    </label>
                  </div>
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
import CustomButton from '@/components/CustomButton.vue';
//import CustomDropDown from '@/components/CustomDropDown.vue';

export default {
  data() {
    return {
      templateType: '',
      nameType: '',
      selectedFile: null,
      fileName: '',
      /*templateOptions: [
        { label: 'Selecione o tipo', value: '' },
        { label: 'Tipo 1', value: 'Tipo 1' },
        { label: 'Tipo 2', value: 'Tipo 2' },
        { label: 'Tipo 3', value: 'Tipo 3' },
      ],*/
    };
  },
  methods: {
    submitForm() {
      console.log('Tipo do Template:', this.templateType);
      console.log('Nome do Template:', this.nameType);
      console.log('Arquivo selecionado:', this.selectedFile);
    },
    handleFileChange(event) {
      this.selectedFile = event.target.files[0];
      this.fileName = this.selectedFile ? this.selectedFile.name : '';
    },
  },
  components: {
    SidebarMenu,
    CustomButton,
    //CustomDropDown,
  },
};
</script>
