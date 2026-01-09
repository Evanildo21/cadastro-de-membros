<template>
  <header class="header">
    <img :src="logo" alt="Logo" class="logo" />
    <h1>Nerds Membros</h1>
  </header>
</template>

<script>
import logo from '../assets/logo.jpg'

export default {
  name: 'HeaderComponent',
  data() {
    return {
      logo
    }
  }
}
</script>
