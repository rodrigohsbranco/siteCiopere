<template>
  <div id="mainCabecalho">
      <div class="row" id="header">
            <div class="col-sm-4">
                <a class="cab-ciope" href="#">CIOPE/RE</a>
                <span class="cab-nome">-</span>
                <span class="cab-nome">Página Inicial</span>
                <span class="nome-confidencial ml-2">#CONFIDENCIAL 10</span>
            </div>
            <div id="user" class="col-sm-4 text-right align-self-center">
                <span>Aqui fica os dados do usuário que acessar</span>
            </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    #header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 15px;
  padding: 0 1.25rem;
  height: 85px;
  color: #fff;
  background: linear-gradient(to right, #005CA9, #54BBAB);
}

.cab-ciope {
  margin: 0;
  font-size: 25px;
  color: #fff;
  text-decoration: none !important;
}

.cab-nome {
  margin: 0;
  font-size: 25px;
  color: #fff;
  text-decoration: none !important;
}
</style>