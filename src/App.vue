<template>
  <div class="text-center">
      <Cabecalho />
      <Navbar />
      <Banner />
      <Sobre />
      <Organograma />
      <Destaques />
      <Noticias />
      <GestaoPessoas />
      <Gestores />
      <Rodape />
  </div>
</template>

<script>
import Cabecalho from './components/Cabecalho'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Sobre from './components/Sobre'
import Organograma from './components/Organograma'
import Destaques from './components/Destaques'
import Noticias from './components/Noticias'
import GestaoPessoas from './components/GestaoPessoas'
import Gestores from './components/Gestores'
import Rodape from './components/Rodape'


export default {
    components: {
        Navbar,
        Cabecalho,
        Banner,
        Sobre,
        Organograma,
        Destaques,
        Noticias,
        GestaoPessoas,
        Gestores,
        Rodape
    }
}
</script>  