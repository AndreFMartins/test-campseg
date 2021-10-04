<template>
  <b-modal
    id="user_modal"
    hide-footer
    title="Gerenciar usuário"
    @hidden="formReset"
  >
    <b-form @submit.prevent="save">
      <b-form-group>
        <b-form-input
          v-model="payload.name"
          placeholder="Nome completo"
          size="lg"
          required
        />
      </b-form-group>
      <b-form-group>
        <b-form-input
          v-model="payload.username"
          placeholder="Usuário"
          :required="payload.id === null"
          :disabled="!!payload.id"
          size="lg"
        />
      </b-form-group>
      <b-form-group>
        <b-form-input
          v-model="payload.password"
          type="password"
          placeholder="Senha"
          :required="payload.id === null"
          size="lg"
        />
      </b-form-group>
      <b-form-group>
        <b-form-input
          v-model="payload.password_confirmation"
          type="password"
          placeholder="Confirme sua senha"
          :required="payload.id === null"
          size="lg"
        />
      </b-form-group>
      <b-form-group label="Perfil" v-slot="{ ariaDescribedby }">
        <b-form-radio
          v-for="(role, idx) in roles"
          :key="idx"
          v-model="payload.role_id"
          :aria-describedby="ariaDescribedby"
          :disabled="
            getUserData.role === 'admin' && payload.id === getUserData.id
          "
          name="role"
          :value="role.id"
          >{{ role.description }}</b-form-radio
        >
      </b-form-group>

      <b-form-group>
        <b-button
          type="submit"
          variant="dark"
          size="lg"
          block
          :disabled="loading"
        >
          <b-spinner v-if="loading" small />
          Salvar
        </b-button>
      </b-form-group>
    </b-form>
  </b-modal>
</template>
<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';
import UserRequest from '@/domain/users/UserRequest';
import RoleRequest from '@/domain/users/RoleRequest';

const defaultPayload = () => ({
  id: null as null | number,
  name: '',
  username: '',
  password: '',
  password_confirmation: null,
  role_id: null,
});
export default Vue.extend({
  name: 'UserModal',
  data: () => ({
    payload: defaultPayload(),
    loading: false,
    roles: [],
  }),
  mounted() {
    RoleRequest.list().then(({ data }) => {
      this.roles = data;
    });
  },
  computed: mapGetters({ getUserData: 'getUserData' }),

  methods: {
    formReset() {
      this.payload = defaultPayload();
    },
    edit(item = defaultPayload()) {
      this.payload = { ...item };
      this.$bvModal.show('user_modal');
    },
    async save() {
      try {
        this.loading = true;
        if (this.payload.id === null) {
          await UserRequest.store(this.payload);
        } else {
          await UserRequest.update(this.payload, this.payload.id);
        }

        this.$emit('success');
        this.$swal('Ação realizada com sucesso');
        this.$bvModal.hide('user_modal');
      } catch ({ response }) {
        if (response.status === 422) {
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
            text: 'Falha ao salvar o registro do usuário, tente novamente',
          });
        }
      } finally {
        this.loading = false;
      }
    },
  },
});
</script>
