<template>
  <button
    :type="type"
    :disabled="disabled"
  >
    <span>{{ label }}</span>
  </button>
</template>

<script>
export default {
  props: {
    type: String,
    name: String,
    icon: String,
    disabled: Boolean,
    variant: String,
    label: String,
  },
  methods: {
    handleClick() {
      // Adicione seu código de manipulação de clique aqui, se necessário
    },
  },
};
</script>

<style scoped>
/* Defina seus estilos CSS aqui, incluindo .primaryCustomButton e .secondaryCustomButton */
</style>
