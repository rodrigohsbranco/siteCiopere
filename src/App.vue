<template>
  <div>
    <div>
      <!-- <title>CIOPE - PE</title> --><!-- NÃO FUNCIONOU -->
      <!-- <link rel="shortcut icon" href="./components/imagens/logoSUBAN.png"> -->
    </div>
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
    <div>
      <!-- classe criada para a navbar no qual ela só vai aparecer inteira qd a tela estiver grande
                e tb as classes de estilo da navbar -->
        <nav class="navbar navbar-fixed-top navbar-expand-lg navbar-dark">
          <!-- botão clicável para o navbar recolher ou não -->
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSite">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <!-- criando conteúdo da navbar -->
                <div class="collapse navbar-collapse" id="navbarSite">
                    <ul class="navbar-nav mr-auto">
                        <li class="navbar-item">
                            <a class="nav-link" href="#">Conformidade</a>
                        </li>
                        <li class="navbar-item">
                            <a class="nav-link" href="#">Atende</a>
                        </li>
                        <li class="navbar-item">
                            <a class="nav-link" href="#">Conquiste</a>
                        </li>
                        <li class="navbar-item">
                            <a class="nav-link" href="#">Interno</a>
                        </li>
                        <li class="navbar-item dropdown"><!--menu dropdown-->
                            <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" id="navDrop">
                                Links úteis
                            </a>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="#">Portal SUBAN</a>
                                <a class="dropdown-item" href="#">SIIAC</a>
                                <a class="dropdown-item" href="#">SICT2</a>
                            </div>
                        </li>
                    </ul>
                </div>
        </nav>
    </div>
    <!-- IMAGEM DE RECIFE -->
    <div class="row">
      <div class="position-relative">
                <img src="./components/imagens/recife.png" alt="Imagem responsiva" class="img-fluid d-block">
                <div class="carousel-caption">
                    <h2 class="text-center text">CIOPE RECIFE</h2>
                    <h4 class="text-center text">Centralizadora de Operações Bancárias</h4>
                </div>
      </div>
    </div>
    <!-- INSERINDO TEXTOS APÓS O CAROUSEL -->
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
    <!-- CONFORMIDADE, OP BANCÁRIAS, ATENDIMENTO -->
    <div class="container">
      <div class="row">
                <img src="./components/imagens/imgConformidade.png" class="rounded mx-auto d-block" alt="Conformidade" id="conformidade">
                <img src="./components/imagens/imgOpBancarias.png" class="rounded mx-auto d-block" alt="Operações Bancárias" id="opbancarias">
                <img src="./components/imagens/imgAtendimento.png" class="rounded mx-auto d-block" alt="Atendimento" id="atendimento">
      </div>
    </div>
    <div class="row">
      <div class="col-12 text-center my-5"> <!--my é a margem do eixo y que vai de 1 até 5-->
                    <span class="conformidade">Conformidade</span>
                    <span class="opbancaria">Operações Bancárias</span>
                    <span class="atendimento">Atendimento</span>
      </div>
    </div>
    <!-- JUMBOTRON -->
    <div class="jumbotron jumbotron-fluid">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center">
                    <h1 class="display-4">Gestores CIOPE Recife</h1>
                    
                </div>
            </div>
        </div>
    </div>
    <!-- CRIANDO CARDS -->
    <div class="row justify-content-sm-center">
      <div class="col-sm-6 col-md-4">
        <div class="card mb-5">
          <img class="card-img-top" src="./components/imagens/imgAssis.png">
          <div class="card-body">
              <h4 class="card-title">Duis aute irure</h4>
              <h6 class="card-subtitle mb-2 text-muted">dolor in reprehenderit</h6>
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
    </div>  
  </div>
</template>

<script>

</script>

<style lang="scss">

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

.navbar {
  position: relative;
  height: 42px;
  text-align: left;
  padding: .75rem 2rem;
  color: #fff;
  background: #005CA9;
  border-top: 1px solid rgba(255, 255, 255, .3);
  display: flex;
  align-items: center;
}

.nav-link {
  font-size: 15px;
  color: #fff;
  text-decoration: none;
  cursor: pointer !important;
}

.img {
  max-width: 100%;
  height: auto;
}

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
  position: relative;

  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 30px;

  text-align: justify;
}

#conformidade {
  position: relative;
  left: 10%;
  /*right: 62.55%;
  top: 50.93%;
  bottom: 27.73%;*/
}

#opbancarias {
  position: relative;
  left: -3%;
}

#atendimento {
  position: relative;
  left: -13.5%;
}

.conformidade {
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
}

.display-4 {
  position: absolute;
height: 64px;
left: 0%;
right: 0%;
top: -60%;
font-weight: bold;
font-family: Futura-Bold;
font-size: 36px;
line-height: 64px;
/* identical to box height, or 178% */

text-align: center;

color: #0071CF;

}


</style>
