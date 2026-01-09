<script setup>
const emit = defineEmits(['search'])
</script>

<template>
  <input
    class="search"
    placeholder="Buscar Membro: Digite nome ou matrícula..."
    @input="emit('search', $event.target.value)"
  />
</template>

<style scoped>
.search {
  width: 100%;
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
  margin-bottom: 15px;
}
</style>

