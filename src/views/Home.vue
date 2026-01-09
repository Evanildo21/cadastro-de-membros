<template>
  <HeaderComponent/>

  <MembersForm
    :memberToEdit="selectedMember"
    @saved="handleSaved"
  />
  <input
    class="search"
    type="text"
    placeholder="Buscar por nome ou matrícula..."
    v-model="search"
  />
  <MembersTable
    :members="filteredMembers"
    @edit="handleEdit"
    @remove="handleRemove"
  />
</template>

<script>
import MembersForm from '../components/MembersForm.vue'
import MembersTable from '../components/MembersTable.vue'
import membersService from '../services/membersService'
import HeaderComponent from '../components/HeaderComponent.vue'


export default {
  name: 'Home',

  components: {
    HeaderComponent,
    MembersForm,
    MembersTable
  },

  data() {
    return {
      members: [],
      selectedMember: null,
      search: ''
    }
  },
  computed: {
    filteredMembers() {
      const term = this.search.toLowerCase()

      return this.members.filter(member =>
        member.name.toLowerCase().includes(term) ||
        member.matricula.toLowerCase().includes(term)
      )
    }
  },

  async mounted() {
    await this.loadMembers()
  },

  methods: {
    async loadMembers() {
      const { data } = await membersService.getAll()
      this.members = data
    },

    handleEdit(member) {
      this.selectedMember = { ...member }
    },

    async handleRemove(id) {
      await membersService.delete(id)
      await this.loadMembers()
    },

    async handleSaved() {
      this.selectedMember = null
      await this.loadMembers()
    }
  }
}
</script>



<style scoped>
.container {
  display: flex;
  gap: 32px;
  align-items: flex-start;
}

.left {
  width: 35%;
}

.right {
  width: 65%;
}

.left, .right {
  background: #fff;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.08);
}


.search {
  width: 100%;
  padding: 10px;
  margin: 16px 0;
  border-radius: 6px;
  border: 1px solid #ccc;
}
</style>