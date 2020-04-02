<template>
  <div class="mainGestores">
      <section class="Gestores">

        <h3 class="TituloGestores">Gestores CIOPE Recife</h3>

    <!--Assis-->

        <div class="TodosGestores">
                <div class="bordaGestores">
                    <img class="imgGestores" src="../assets/images/imgAssis.png">
                    <p class="NomeGestores">Assis</p>
                    <p class="FuncaoGestores">Gerente de Centralizadora</p>
                    <p class="AtividadeGestores">Gerência</p>
                </div>

            <!--Eldonor-->

                <div class="bordaGestores">
                    <img class="imgGestores" src="../assets/images/imgEldonor.png">
                    <p class="NomeGestores">Eldonor</p>
                    <p class="FuncaoGestores">Coordenador de Centralizadora</p>
                    <p class="AtividadeGestores">Imóveis CAIXA</p>
                </div>
                                
            <!--Matheus-->

                <div class="bordaGestores">
                    <img class="imgGestores" src="../assets/images/imgMatheus.png">
                    <p class="NomeGestores">Matheus</p>
                    <p class="FuncaoGestores">Coordenador de Centralizadora</p>
                    <p class="AtividadeGestores">Atendimento</p>
                </div>

            <!--Elvis-->

                <div class="bordaGestores">
                    <img class="imgGestores" src="../assets/images/imgElvis.png">
                    <p class="NomeGestores">Elvis</p>
                    <p class="FuncaoGestores">Coordenador de Centralizadora</p>
                    <p class="AtividadeGestores">Habitação</p>
                </div>

                <!--Cleiton-->

                    <div class="bordaGestores">
                        <img class="imgGestores" src="../assets/images/imgCleiton.png">
                        <p class="NomeGestores">Cleiton</p>
                        <p class="FuncaoGestores">Coordenador de Centralizadora</p>
                        <p class="AtividadeGestores">João Pessoa</p>
                    </div>

                <!--Bruno-->
                    <div class="bordaGestores">
                        <img class="imgGestores" src="../assets/images/imgBruno.png">
                        <p class="NomeGestores">Bruno</p>
                        <p class="FuncaoGestores">Coordenador de Centralizadora</p>
                        <p class="AtividadeGestores">Maceió</p>

                    </div>

                <!--Paula-->
                    <div class="bordaGestores">
                        <img class="imgGestores" src="../assets/images/imgPaula.png">
                        <p class="NomeGestores">Paula</p>
                        <p class="FuncaoGestores">Coordenador de Centralizadora</p>
                        <p class="AtividadeGestores">Caruaru</p>
                    </div>
        </div>

    </section>
  </div>
</template>

<script>
export default {

}
</script>

<style>

    .Gestores {
    background: #EFF5F6;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border-bottom: 30px;
}

.TituloGestores {
    display: Flex;
    justify-content: center;
    font-family: 'Futura';
    font-weight: bold;
    font-size: 36px;
    color: #0071CF;
    margin-top: 36px;
    margin-bottom: 30px;
}


.TodosGestores {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: auto;
    margin-bottom: 30px;
}

@media (max-width: 1630px) {
    .TodosGestores {
        display: flex;
        flex-wrap: wrap;
    }

}

.bordaGestores {
    display: flex;
    flex-direction: column;
    width: 190px;
    height: 325px;
    margin: 10px;
    margin-top: 30px;
    margin-bottom: 30px;

}

.imgGestores {
    display: Flex;
    justify-content: center;
    left: 2.08%;
    right: 85.57%;
    top: 26.13%;
    bottom: 40.45%;

}
.NomeGestores {
    display: Flex;
    justify-content: center;
    width: 100%;
    font-family: 'Futura';
    font-weight: bold;
    font-size: 24px;
    line-height: 36px;
    text-align: center;
    color: #005CA9;
}

.FuncaoGestores {
    display: Flex;
    justify-content: center;
    width: 100%;
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    text-align: center;
    color: #005CA9;
    margin-top: 0px;
    margin-bottom: 0px;
}

.AtividadeGestores {
    display: Flex;
    justify-content: center;
    width: 100%;
    font-family: 'Open Sans', sans-serif;
    font-weight: bold;
    font-size: 18px;
    line-height: 36px;
    text-align: center;
    color: #005CA9;
}

</style>