<template>
<div id="mainSobre">

  <div class="row">
    <div class="col-12 my-5 text-center">
        <p class="bemvindo">Seja bem-vindo</p>
        <h1 class="quemsomos">Quem somos?</h1>
    </div>
  </div>
  
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
          <p class="textoquemsomos">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat  incididunt ut laboret. Lorem ipsum dolor sit
              amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat  incididunt ut laboret.
          </p>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="col-12">
      <div class="row">
          <div class="col-12 col-sm-4">
            <img src="../assets/images/imgConformidade.png" class="rounded mx-auto d-block" alt="Conformidade" id="conformidade">
            <h4 class="texto">Conformidade</h4>
          </div>
          <div class="col-12 col-sm-4">
            <img src="../assets/images/imgOpBancarias.png" class="rounded mx-auto d-block" alt="Operações Bancárias" id="opbancarias">
            <h4 class="texto">Operações Bancárias</h4>
          </div>

          <div class="col-12 col-sm-4">
            <img src="../assets/images/imgAtendimento.png" class="rounded mx-auto d-block" alt="Atendimento" id="atendimento">
            <h4 class="texto">Atendimento</h4>
          </div>
      </div>
    </div>
  </div> 
</div>
</template>

<script>
export default {

}
</script>

<style>
  .bemvindo {
    font-weight: bold;
    font-size: 16px;
    text-align: center;
    color: #0071CF;
  }
  .quemsomos {
    font-weight: bold;
    font-size: 36px;
    line-height: 64px;
    text-align: center;
    color: #0071CF;
  }
  .textoquemsomos {
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    line-height: 30px;
    text-align: justify;
    color: #48586C;
  }
  .texto {
    font-family: 'Open Sans', sans-serif;
    font-weight: bold;
    font-size: 18px;
    text-align: center;
    color: #0071CF;
  }
</style>