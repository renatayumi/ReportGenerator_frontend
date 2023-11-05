<template>
  <aside class="menu">
    <p class="menu-label">
      Relatórios
    </p>
    <ul class="menu-list">
      <li>
        <router-link to="/TipoTemplate">Tipos de Templates</router-link>
      </li>
      <li>
        <router-link to="/CadastroTemplate">Cadastros de Templates</router-link>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: 'SidebarMenu',
};
</script>
