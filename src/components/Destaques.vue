<template>
  <div id="mainDestaques">
      <h1 class="titulo">Destaques</h1>
    <div>
      <img class="casa" src="../assets/images/imgCasa.png" alt="casa">
      <img class="backCasa" src="../assets/images/imgBackAgilizaAzul.png" alt="backCasa">
      <span class="dataCasa">26 de fevereiro de 2020</span>
      <span class="textoCasa">Ferramenta AGILIZA reduz tempo de análise para conformidade dos dossiês de Concessão Habitacional</span>
      <!-- <img class="poligonoCasa" src="../assets/images/poligonoCasa.png" alt="poligonoCasa"> -->
    </div>
    <div>
      <img class="laranja" src="../assets/images/imgBackAgilizaLaranja.png" alt="laranja">
      <img class="atendente" src="../assets/images/imgAtendente.png" alt="atendente">
      <!-- <img class="poligonoCasa" src="../assets/images/poligonoCasa.png" alt="poligonoCasa"> -->
    </div>
    <div>
      <img class="chatbot" src="../assets/images/imgChatbot.png" alt="chatbot">
      <img class="backChatbot" src="../assets/images/imgBackChatbot.png" alt="backchatbot">
      <!-- <img class="poligonoCasa" src="../assets/images/poligonoCasa.png" alt="poligonoCasa"> -->
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

.titulo {
    position: relative;
    height: 64px;
    left: -30%;
    right: 77.18%;
    margin-top: 03%;
    margin-bottom: 02%;
    font-family: Futura-Bold;
    font-size: 36px;
    line-height: 64px;
    text-align: center;
    color: #0071CF;
}

.casa {
    position: relative;
    width: 685px;
    height: 527px;
    left: -290px;
}

.backCasa {
    position: absolute;
    width: 685px;
    height: 527px;
    left: 880px;
}

.dataCasa {
  position: absolute;
  width: 457px;
  height: 32px;
  left: 753px;
  top: 1650px;

  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;

  color: #48586C;
}

.textoCasa {
  position: absolute;
  width: 510px;
  height: 108px;
  left: 925px;
  top: 1700px;
  text-align: justify;
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 35px;

  color: #48586C;

}

/*.poligonoCasa {
    position: absolute;
    width: 34px;
    height: 24px;
    left: -400px;
}*/

.laranja {
    position: absolute;
    width: 669px;
    height: 427px;
    left: 211px;

    background: #F39200;
}

.atendente {
    position: absolute;
    width: 685px;
    height: 322px;
    left: 880px;
}

.chatbot {
    position: absolute;
    width: 670px;
    height: 252px;
    left: 210px;
    margin-top: 25%;
}

.backChatbot {
    position: absolute;
    width: 670px;
    height: 427px;
    left: 880px;
    margin-top: 25%;
    
}
</style>