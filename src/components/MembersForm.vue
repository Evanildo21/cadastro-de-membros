<template>
  <div class="form-container">
    <h2>{{ isEdit ? 'Editar Membro' : 'Cadastrar Membro' }}</h2>

    <form @submit.prevent="saveMember">
      <input
        type="text"
        placeholder="Nome"
        v-model="member.name"
        required
      />

      <input
        type="number"
        placeholder="Matrícula"
        v-model="member.matricula"
        required
      />

      <input
        type="email"
        placeholder="Email"
        v-model="member.email"
        required
      />

      <button type="submit">
        {{ isEdit ? 'Atualizar' : 'Cadastrar' }}
      </button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'MembersForm',

  props: {
    memberToEdit: {
      type: Object,
      default: null
    }
  },

  data() {
    return {
      member: {
        id: null,
        name: '',
        matricula: '',
        email: ''
      }
    }
  },

  computed: {
    isEdit() {
      return this.member.id !== null
    }
  },

  watch: {
    memberToEdit: {
      immediate: true,
      handler(newVal) {
        if (newVal) {
          // ✅ mantém o id
          this.member = { ...newVal }
        } else {
          // ✅ evita lixo de edição anterior
          this.resetForm()
        }
      }
    }
  },

  methods: {
    async saveMember() {
      try {
        if (this.isEdit) {
          // ✅ PUT COM ID
          await axios.put(
            `http://localhost:3000/members/${this.member.id}`,
            this.member
          )
        } else {
          // ✅ POST — json-server cria o id
          await axios.post(
            'http://localhost:3000/members',
            {
              name: this.member.name,
              matricula: this.member.matricula,
              email: this.member.email
            }
          )
        }

        this.$emit('saved')
        this.resetForm()

      } catch (error) {
        console.error('Erro ao salvar membro:', error)
      }
    },

    resetForm() {
      this.member = {
        id: null,
        name: '',
        matricula: '',
        email: ''
      }
    }
  }
}
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

input {
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
}

button {
  margin-top: 12px;
  padding: 10px;
  border: none;
  border-radius: 6px;
  background: #007bff;
  color: white;
  cursor: pointer;
}

button:hover {
  background: #0056b3;
}
</style>
