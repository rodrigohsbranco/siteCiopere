<template>
  <div id="mainNoticias">
      <h1 class="titulo">Notícias e Publicações</h1>
      <a class="todos" href="">TODOS</a>
      <a class="noticias" href="">NOTÍCIAS</a>
      <a class="informes" href="">INFORMES</a>
      <a class="cartilhas" href="">CARTILHAS</a>
      <a class="relampago" href="">AÇÃO RELÂMPAGO</a>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    #mainNoticias {
        margin-top: 50.5%;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        margin-bottom: 30px;
    }

    .todos {
        position: absolute;
        width: 41px;
        height: 28px;
        left: 485px;
        font-family: Open Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 10px;
        line-height: 64px;
        /* or 640% */
        display: flex;
        align-items: center;
        text-align: center;
        color: #48586C;
    }

    .noticias {
        position: absolute;
        width: 54px;
        height: 28px;
        left: 570px;
        font-family: Open Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 10px;
        line-height: 64px;
        /* or 640% */
        display: flex;
        align-items: center;
        text-align: center;
        color: #48586C;
    }

    .informes {
        position: absolute;
        width: 54px;
        height: 28px;
        left: 667px;
        font-family: Open Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 10px;
        line-height: 64px;
        /* or 640% */
        display: flex;
        align-items: center;
        text-align: center;
        color: #48586C;
    }

    .cartilhas {
        position: absolute;
width: 74px;
height: 28px;
left: 758px;
font-family: Open Sans;
font-style: normal;
font-weight: bold;
font-size: 10px;
line-height: 64px;
/* or 640% */
display: flex;
align-items: center;
text-align: center;
color: #48586C;
    }

    .relampago {
        position: absolute;
        width: 101px;
        height: 28px;
        left: 855px;
        font-family: Open Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 10px;
        line-height: 64px;
        /* or 640% */
        display: flex;
        align-items: center;
        text-align: center;
        color: #48586C;
    }
</style>