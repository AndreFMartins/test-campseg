<template>
  <b-container fluid>
    <b-row class="py-md-5 logo justify-content-center">
      <b-col
        lg="6"
        xl="3"
        md="8"
        class="bg-white auth-area p-5 rounded text-center"
      >
        <img src="images/campseg.jpg" class="rounded mb-2" />
        <b-form
          @submit.prevent="login"
          class="align-self-center offset-md-3 col-md-6 offset-lg-0 col-lg-12"
        >
          <b-form-group>
            <b-input
              v-model="username"
              size="lg"
              placeholder="Usuário"
              required
            />
          </b-form-group>
          <b-form-group>
            <b-input
              v-model="password"
              size="lg"
              type="password"
              placeholder="Digite sua senha"
              required
            />
          </b-form-group>
          <b-form-group>
            <b-button
              type="submit"
              :disabled="loading"
              variant="warning"
              class="text-white"
              size="lg"
              block
            >
              <b-spinner v-if="loading" small />
              Login
            </b-button>
          </b-form-group>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data: () => ({
    username: '',
    password: '',
    loading: false,
  }),
  methods: {
    login() {
      const { username, password } = this;
      this.loading = true;
      // @ts-ignore
      this.$auth
        .login({
          data: { username, password },
          redirect: { name: 'dashboard' },
          staySignedIn: true,
          fetchUser: true,
        })
        .then(() => {
          this.$store.commit('GET_USER_INFORMATION');
        })
        .catch(({ response }) => {
          if (response?.status === 422) {
            const message: string = Object.values<string>(response.data.errors).shift()
              ?? 'Formulário possui dados inválidos';
            this.$swal({
              icon: 'error',
              title: 'Oops...',
              text: message,
            });
          } else {
            this.$swal({
              icon: 'error',
              title: 'Oops...',
              text: 'Falha ao realizar o login, tente novamente',
            });
          }
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
});
</script>
<style scoped>
.logo {
  background: #f5b436; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #ffcc33, #f5b436);
  background: linear-gradient(to right, #ffcc33, #f5b436);
}
.auth-area {
  margin-bottom: -15rem;
}
</style>
