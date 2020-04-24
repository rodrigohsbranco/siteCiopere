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

  <div class="container cartao1">
    <div class="col-12">
      <div class="row cartao-borda">
          <div class="col-12 col-sm-4 cartao2" id="cartao1">
            <img src="../assets/images/imgConformidade.png" alt="Conformidade">
            <div class="tooltip1">
              <div class="tooltip-texto1">
                <h4>Conformidade</h4>
                <ul>
                  <li>Operações de concessão de crédito e garantia habitacional</li>
                  <li>Operações de concessão de crédito oriundas de CCA</li>
                  <li>Validação de prêmio de loterias</li>
                  <li>Qualificação de garantia BNDU</li>
                </ul>
              </div>
            </div>
            <div class="texto">
            <h4>Conformidade</h4>
            </div>
          </div>
          <div class="col-12 col-sm-4 cartao2" id="cartao2">
            <img src="../assets/images/imgOpBancarias.png" alt="Operações Bancárias">
            <div class="tooltip2">
              <div class="tooltip-texto2">
                <h4>Operações Bancárias</h4>
                <ul>
                  <li class="li-titulo">Imóveis Caixa</li>
                  <li>Atualização cadastral</li>
                  <li>Avaliação de risco</li>
                  <li>Geração de minuta contratual</li>
                </ul>
              </div>
            </div>
            <div class="texto">
            <h4>Operações Bancárias</h4>
            </div>
          </div>

          <div class="col-12 col-sm-4 cartao2" id="cartao3">
            <img src="../assets/images/imgAtendimento.png" alt="Atendimento">
            <div class="tooltip3">
              <div class="tooltip-texto3">
                <h4>Atendimento</h4>
                <ul>
                  <li>Prestar atendimento de excelência de forma ágil e resolutiva, com foco na satisfação do cliente
                    nas questões relativas à conformidade e operações bancários das rotinas da CIOPE Recife</li>
                  <li>Ferramenta de atendimento ATENDE</li>
                </ul>
              </div>
            </div>
            <div class="texto">
            <h4 class="atendimento">Atendimento</h4>
            </div>
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
    padding: 0px 200px;
    color: #48586C;
  }
  .texto h4 {
    font-family: 'Open Sans', sans-serif;
    font-weight: bold;
    font-size: 18px;
    text-align: center;
    color: #0071CF;
  }
  .atendimento {
    padding: 12px 0px 0px 0px;
  }
  .cartao1 {
    width: 900px;
    margin-top: 20px;
  }
  .cartao-borda {
    position: relative;
    font-family: Verdana, sans-serif;
    border: none;
  }
  #cartao1:hover .tooltip1 {
    visibility: visible;
  }
  .tooltip1 {
    position: absolute;
    visibility: hidden;
    width: 550px;
    height: 200px;
    left: -150px;
    top: -204px;

    border: 20px solid #EFF5F6;
    box-sizing: border-box;
    background-color: #fff;
  }
  .tooltip-texto1 h4 {
    margin-top: 10px;
    margin-left: 30px;

    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    text-align: justify;

    color: #0071CF;
  }
  .tooltip-texto1 li {
    margin-left: 10px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 25px;
    text-align: justify;

    color: #48586C;

  }
  #cartao2:hover .tooltip2 {
    visibility: visible;
  }
  .tooltip2 {
    position: absolute;
    visibility: hidden;
    width: 400px;
    height: 200px;
    left: -50px;
    top: -204px;

    border: 20px solid #EFF5F6;
    box-sizing: border-box;
    background-color: #fff;
  }
  .tooltip-texto2 h4 {
    margin-top: 10px;
    margin-left: 30px;

    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    text-align: justify;

    color: #0071CF;
  }
  .li-titulo {
    
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 25px;
    text-align: justify;
    list-style: none;

    color: #48586C;

  }
  .tooltip-texto2 li {
    margin-left: 10px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 25px;
    text-align: justify;

    color: #48586C;

  }
  #cartao3:hover .tooltip3 {
    visibility: visible;
  }
  .tooltip3 {
    position: absolute;
    visibility: hidden;
    padding-right: 20px;
    width: 600px;
    height: 200px;
    left: -150px;
    top: -204px;

    border: 20px solid #EFF5F6;
    box-sizing: border-box;
    background-color: #fff;
  }
  .tooltip-texto3 h4 {
    margin-top: 10px;
    margin-left: 30px;

    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    text-align: justify;

    color: #0071CF;
  }
  .tooltip-texto3 li {
    margin-left: 10px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 25px;
    text-align: justify;

    color: #48586C;

  }
  @media (min-width: 576px) and (max-width: 767.98px) { 
    .textoquemsomos {
      padding: 0px 50px; }
    
  }
</style>