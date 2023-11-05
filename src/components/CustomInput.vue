<template>
  <div class="custom-input">
    <label class="label">{{ label }}</label>
    <input
      :class="{'input is-normal': true, 'is-danger': isError}"
      :type="type"
      :placeholder="placeholder"
      :value="model"
      @input="handleInput"
      required
    />
    <div v-if="isError" class="error-message">{{ errorMessage }}</div>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    type: String,
    placeholder: String,
    model: [String, Number],
    validationFunction: Function,
  },
  data() {
    return {
      isError: false,
      errorMessage: '',
    };
  },
  methods: {
    handleInput(event) {
      if (this.validationFunction) {
        const { valid, message } = this.validationFunction(event.target.value);
        this.isError = !valid;
        this.errorMessage = message;
      }
      this.$emit('input', event.target.value);
    },
  },
};
</script>

<style scoped>
.custom-input {
  display: flex;
  flex-direction: column;
}

.input-wrapper {
  display: flex;
  flex-direction: column;
}

.error-message {
  color: red;
}
</style>
