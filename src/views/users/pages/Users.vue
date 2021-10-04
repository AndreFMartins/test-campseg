<template>
  <b-container class="pb-2" style="min-height: 400px">
    <b-row class="justify-content-center" style="margin-top: -3rem">
      <b-input
        id="inline-form-input-name"
        class="w-50 search pl-4"
        v-model="search"
        size="lg"
        placeholder="Buscar usuário..."
      />
    </b-row>
    <b-row class="my-2">
      <b-col>
        <b-button variant="dark" v-b-modal.user_modal>
          <b-icon icon="plus" />
          Adicionar
        </b-button>
      </b-col>
    </b-row>
    <b-row
      class="d-flex flex-column justify-content-between"
      style="min-height: 400px"
    >
      <div class="table-responsive px-3">
        <table class="table table-bordered table-striped text-light">
          <thead>
            <th>Nome completo</th>
            <th>Nome de usuário</th>
            <th class="text-center">Perfil</th>
            <th class="text-center">Opção</th>
          </thead>
          <tbody>
            <tr v-for="item in items.data" :key="item.id">
              <td>{{ item.name }}</td>
              <td>{{ item.username }}</td>
              <td class="text-center">
                <b-badge
                  :variant="item.role_name === 'admin' ? 'success' : 'primary'"
                >
                  {{ item.role }}</b-badge
                >
              </td>
              <td style="width: 80px" class="text-center">
                <b-icon
                  icon="pencil-square"
                  @click="$refs.user_modal.edit(item)"
                />
                <b-icon
                  icon="trash"
                  class="ml-2"
                  v-if="item.id !== getUserData.id"
                  variant="danger"
                  @click="drop(item.id)"
                />
              </td>
            </tr>
            <tr v-if="!items.data.length">
              <td class="text-center py-5" colspan="4">
                <i class="fas fa-solid fa-robot" style="font-size: 30px"></i>
                <h4>Não há resultados!</h4>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="d-flex justify-content-center w-100">
        <b-pagination
          v-if="items.data.length"
          v-model="currentPage"
          :total-rows="items.total"
          :per-page="items.per_page"
          :last-page="items.last_page"
        />
      </div>
    </b-row>
    <user-modal ref="user_modal" @success="find" />
  </b-container>
</template>
<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';
import UserRequest from '@/domain/users/UserRequest';
import UserModal from '@/views/users/components/UserModal.vue';

export default Vue.extend({
  components: {
    UserModal,
  },
  name: 'Users',
  data: () => ({
    items: { current_page: 1, data: [] },
    search: '',
    currentPage: 1,
  }),
  mounted() {
    this.find();
  },
  computed: mapGetters({ getUserData: 'getUserData' }),
  watch: {
    search(search: string): void {
      this.find({ search });
    },
    currentPage(page) {
      this.find({ page });
    },
  },
  methods: {
    async drop(id: number) {
      this.$swal(
        'Alerta',
        'Deseja prosseguir com a exclusão do usuário?',
        'question',
      ).then(async ({ isConfirmed }) => {
        if (isConfirmed) {
          try {
            await UserRequest.destroy(id);
            this.$swal('Usuário removido com sucesso');
            this.find();
          } catch (e) {
            this.$swal({
              icon: 'error',
              title: 'Oops...',
              text: 'Falha ao remover o registro do usuário, tente novamente',
            });
          }
        }
      });
    },
    async find(options = {}) {
      const { data } = await UserRequest.list(options);
      this.items = data ?? {};
      this.currentPage = this.items.current_page;
    },
  },
});
</script>
<style lang="scss" scoped>
.search {
  border-radius: 50px;
}
</style>
