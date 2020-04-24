<template>
  <div id="mainDestaques">
    <div class="row">
      <div class="col-12">
        <h1 class="titulo text-left">Destaques</h1>
      </div>
    </div>
    <div class="row destaques">
      <div class="col-12 sm-4">
        <img class="destaques1" src="../assets/images/imgDestaques1.png" alt="Destaques1">
        <span class="data-destaques1">26 de fevereiro de 2020</span>
        <a class="link-destaques1" href="#">Ferramenta AGILIZA reduz tempo de análise para conformidade dos dossiês de Concessão Habitacional</a>
        <span class="texto-destaques1">A ferramenta foi desenvolvida unindo ferramentas usadas pelas CIOPES para análise da conformidade...</span>
        <a class="leiamais-destaques1" href="#">LEIA MAIS</a>
      </div>
      <div class="col-12 sm-4">
        <img class="destaques2" src="../assets/images/imgDestaques2.png" alt="Destaques2">
        <span class="data-destaques2">26 de fevereiro de 2020</span>
        <a class="link-destaques2" href="#">Ferramenta AGILIZA reduz tempo de análise para conformidade dos dossiês de Concessão Habitacional</a>
        <span class="texto-destaques2">A ferramenta foi desenvolvida unindo ferramentas usadas pelas CIOPES para análise da conformidade...</span>
        <a class="leiamais-destaques2" href="#">LEIA MAIS</a>
      </div>
      <div class="col-12 sm-4">
        <img class="destaques3" src="../assets/images/imgDestaques3.png" alt="Destaques3">
        <span class="data-destaques3">26 de fevereiro de 2020</span>
        <a class="link-destaques3" href="#">Ferramenta AGILIZA reduz tempo de análise para conformidade dos dossiês de Concessão Habitacional</a>
        <span class="texto-destaques3">A ferramenta foi desenvolvida unindo ferramentas usadas pelas CIOPES para análise da conformidade...</span>
        <a class="leiamais-destaques3" href="#">LEIA MAIS</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@font-face {
  font-family: "futura-bold";
  src: url("../assets/fontes/Futura-Bold-font.ttf") format("ttf");
}

#mainDestaques {
  position: relative;
  /* width: 1442px; */
}
.titulo {
  margin-left: 300px;
  display: block;
  font-family: "futura-bold";
  font-size: 36px;
  line-height: 64px;
  color: #0071CF;
}
.destaques {
  padding-right: 300px;
  padding-left: 300px;
}
.destaques1, .destaques2, .destaques3 {
  display: block;
}
.data-destaques1 {
  position: absolute;
  left: 625px;
  top: 30px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color: #48586C;
}
.link-destaques1 {
  position: absolute;
  left: 625px;
  top: 75px;
  width: 510px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  text-align: justify;
  line-height: 35px;
  color: #48586C;
}
.texto-destaques1 {
  position: absolute;
  left: 625px;
  top: 200px;
  width: 502px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  text-align: justify;
  font-size: 14px;
  line-height: 19px;
  color: #48586C;
}
.leiamais-destaques1 {
  position: absolute;
  left: 625px;
  top: 280px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color: #48586C;
}

.data-destaques2 {
  position: absolute;
  left: 50px;
  top: 30px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color: #FFF;
}
.link-destaques2 {
  position: absolute;
  left: 50px;
  top: 75px;
  width: 510px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  text-align: justify;
  line-height: 35px;
  color: #FFF;
}
.texto-destaques2 {
  position: absolute;
  left: 50px;
  top: 200px;
  width: 502px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  text-align: justify;
  font-size: 14px;
  line-height: 19px;
  color: #FFF;
}
.leiamais-destaques2 {
  position: absolute;
  left: 50px;
  top: 280px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color: #FFF;
}

.data-destaques3 {
  position: absolute;
  left: 625px;
  top: 30px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color: #48586C;
}
.link-destaques3 {
  position: absolute;
  left: 625px;
  top: 75px;
  width: 510px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  text-align: justify;
  line-height: 35px;
  color: #48586C;
}
.texto-destaques3 {
  position: absolute;
  left: 625px;
  top: 200px;
  width: 502px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  text-align: justify;
  font-size: 14px;
  line-height: 19px;
  color: #48586C;
}
.leiamais-destaques3 {
  position: absolute;
  left: 625px;
  top: 280px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color: #48586C;
}
@media (min-width: 576px) and (max-width: 767.98px) { 
    .destaques {
      padding: 0px 50px; }
}
</style>