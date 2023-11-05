<template>
  <div>
    {{ setInitialValueOnEdit() }}
    <label>
      {{ label }}
      <span v-if="required" style="color: red; margin: 0; padding: 0">*</span>
    </label>
    <v-select
      v-model="internalValue"
      :options="options"
      :placeholder="'Selecione..'"
      :is-clearable="true"
      :is-searchable="true"
      :is-multi="isMulti"
      @input="findOptionValue"
      @noOptions="() => 'Nenhuma opção encontrada.'"
      style="height: 2rem; border-radius: 8px; font-size: 1rem; padding: 1.5rem .75rem;"
    />
    <p style="color: red">{{ error && helperText }}</p>
    <p>{{ debug && `value: ${JSON.stringify(value)}` }}</p>
    <p>{{ valueType && `type: ${typeof value}` }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: {
    type: String,
    name: String,
    value: [String, Array],
    placeholder: String,
    helperText: String,
    error: Boolean,
    label: String,
    required: Boolean,
    path: String,
    isMulti: Boolean,
    localOptions: Array,
    valueType: Boolean,
  },
  data() {
    return {
      options: [],
      internalValue: null,
    };
  },
  methods: {
    async getData() {
      if (this.path) {
        const response = await axios.get(``);
        const tempOptions = response.data.content.map((item) => ({
          label: item.name,
          value: item.id,
          name: this.name,
        }));
        this.options = tempOptions;
      } else if (this.localOptions) {
        this.options = this.localOptions;
      }
    },
    setInitialValueOnEdit() {
      if (this.isMulti) {
        const tempData = [];
        if (this.value !== null && this.value !== undefined && this.value !== '' && !this.value.isEmpty) {
          this.options.forEach((item) => {
            this.value.forEach((itm) => {
              if (itm.id.toString() === item.value.toString()) {
                tempData.push(item);
              }
            });
          });
          if (!this.internalValue && tempData.length > 0) {
            this.internalValue = tempData;
          }
        }
      } else {
        if (this.value !== null && this.value !== undefined && this.value !== '') {
          this.options.forEach((item) => {
            if (item.value.toString() === this.value.toString()) {
              if (!this.internalValue) {
                this.internalValue = item;
              } else if (this.internalValue.value !== item.value) {
                this.internalValue = item;
              }
            }
          });
        }
      }
    },
    findOptionValue(e) {
      if (this.isMulti) {
        this.internalValue = e || [];
      } else {
        this.internalValue = e || null;
      }
    },
  },
  created() {
    this.getData();
  },
};
</script>
