<template>
  <b-container>
    <b-row class="justify-content-center text-white">
      <b>&copy; Capmseg {{ year }}.</b>
    </b-row>
  </b-container>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Footer',
  computed: {
    year() {
      return new Date().getFullYear();
    },
  },
});
</script>
