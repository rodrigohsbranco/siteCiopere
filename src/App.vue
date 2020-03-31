<template>
  <div class="text-center">
      <h2>Nova estrutura da página utilizando componentes</h2>
      <Navbar />
  </div>
</template>

<script>
import Navbar from './components/Navbar'

export default {
    components: {
        Navbar
    }
}
</script>  