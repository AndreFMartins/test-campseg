<template>
  <b-container
    class="vh-100 d-flex flex-column align-items-center justify-content-center"
  >
    <span style="font-size: 80px">&times;</span>
    <h1>
      Ops, {{ forbidden ? "você não pode continuar" : "página não encontrada" }}
    </h1>
    <p>
        {{ forbidden ? "Sem permissão para acessar a página solicitada"
        : "Verifique o endereço digitado e tente novamente" }}
    </p>
    <b-btn
      class="mt-5"
      @click="$router.push({ name: $auth.check() ? 'dashboard' : 'auth' })"
    >
      <b-icon icon="arrow-left" />
      Voltar
    </b-btn>
  </b-container>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ErrorPage',
  computed: {
    forbidden() {
      return !!this.$route.path.match(/403/)?.length;
    },
  },
});
</script>
