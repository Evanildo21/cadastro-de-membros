<template>
  <div>
    <h3>Lista de Membros</h3>

    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Matrícula</th>
          <th>Email</th>
          <th>Ações</th>
        </tr>
      </thead>

      <tbody>
        <tr v-if="members.length === 0">
          <td colspan="4">Nenhum membro cadastrado</td>
        </tr>

        <tr v-for="member in members" :key="member.id">
          <td>{{ member.name }}</td>
          <td>{{ member.matricula }}</td>
          <td>{{ member.email }}</td>
          <td>
            <button @click="$emit('edit', member)">Editar</button>
            <button @click="$emit('remove', member.id)">Excluir</button>

          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
defineProps({
  members: Array
})

const emit = defineEmits(['edit', 'remove'])
</script>


<style scoped>
table {
  border-collapse: collapse;
  width: 100%;
}

th, td {
  border: 1px solid #ccc;
  padding: 6px;
}
</style>
