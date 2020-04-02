<template>
<div id="mainSobre">
      <div class="container">
        <div class="row">
                <div class="col-12 text-center my-5"> <!--my é a margem do eixo y que vai de 1 até 5-->
                    <p class="bemvindo">Seja bem-vindo</p>
                    <h1 class="quemsomos">Quem somos?</h1>
                </div>
        </div>
      </div>
    <div class="container">
      <div class="row">
                <div class="col-12 text-center my-0"> <!--my é a margem do eixo y que vai de 1 até 5-->
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
      <div class="row">
        <div>
          <img src="../assets/images/imgConformidade.png" class="rounded mx-auto d-block" alt="Conformidade" id="conformidade">
          <h4 class="Texto">Conformidade</h4>
        </div>
        <div>
          <img src="../assets/images/imgOpBancarias.png" class="rounded mx-auto d-block" alt="Operações Bancárias" id="opbancarias">
          <h4 class="Texto">Operações Bancárias</h4>
        </div>
        <div>
          <img src="../assets/images/imgAtendimento.png" class="rounded mx-auto d-block" alt="Atendimento" id="atendimento">
          <h4 class="Texto">Atendimento</h4>
        </div>
      </div>
    </div>
    <!-- <div class="row">
      <div class="col-12 text-center my-5"> <!--my é a margem do eixo y que vai de 1 até 5
                    <span class="conformidade">Conformidade</span>
                    <span class="opbancaria">Operações Bancárias</span>
                    <span class="atendimento">Atendimento</span>
      </div>
    </div>-->
</div>
</template>

<script>
export default {

}
</script>

<style>
   .bemvindo {
  position: relative;

  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 64%;

  text-align: center;
  color: #0071CF;
}

.quemsomos {
  position: relative;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 64px;

  text-align: center;
  color: #0071CF;
}

.textoquemsomos {
    display: flex;
    justify-content: center;
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: normal;
    width: 716px;
    height: 220px;
    font-size: 16px;
    line-height: 30px;
    text-align: justify;
    color: #48586C;
    margin: auto;
    margin-top: 50px;
    margin-bottom: 20px;
}

/*#conformidade {
  position: relative;
  left: 10%;
  /*right: 62.55%;
  top: 50.93%;
  bottom: 27.73%;
}

/*#opbancarias {
  position: relative;
  left: -3%;
}

#atendimento {
  position: relative;
  left: -13.5%;
}*/

.container {
  display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 800px;
    margin: auto;
}

.Texto {
    font-family: 'Open Sans', sans-serif;
    font-weight: bold;
    font-size: 18px;
    line-height: 64px;
    text-align: center;
    color: #0071CF;
    margin: 0px;
}

/*.conformidade {
  position: relative;

  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 64%;
  right: 10%;
  color: #0071CF;
}

.opbancaria {
  position: relative;

  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 64%;
  right: 03%;
  color: #0071CF;
}

.atendimento {
  position: relative;

  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 64%;
  right: -07%;
  color: #0071CF;
}*/
</style>