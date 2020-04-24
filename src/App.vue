<template>
  <div class="text-center">
      <div class="container-fluid">
        <!-- <Cabecalho /> -->
        <!-- <Navbar /> -->
        <Banner />
        <Sobre />
        <Organograma />
        <Destaques />
        <Noticias /> 

        <!-- aguardando ajustes -->
        <!-- <GestaoPessoas /> -->

        <Gestores />
        <Rodape />
      </div>
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