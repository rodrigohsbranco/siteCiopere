<template>
  <div id="mainBanner">
    <div>
        <div class="mainBanner-overlay">
          
        </div>
        <div class="texto-titulo">
          <h1>CIOPE RECIFE</h1>
          <h2>Centralizadora de Operações Bancárias</h2>
        </div>
    </div>
    <div class="dummy"></div>
  </div>
</template>

<script>

export default {
  mounted() {
    $(window).scroll(function() {
      var scrollTop = $(this).scrollTop();

      $('.mainBanner-overlay').css({
        opacity: function() {
          var elementHeight = $(this).height();
          return 1 - (elementHeight - scrollTop) / elementHeight;
        }
      });
    });
  }
}

</script>

<style>


@font-face {
  font-family: "futura-bold";
  src: url("../assets/fontes/Futura-Bold-font.ttf") format("ttf");
}

  #mainBanner {
    position: relative;
    width: 100%;
    height: 774px;
    background:
      url("../assets/images/recife.png") center center/cover space fixed padding-box;
  }
  .mainBanner-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgb(255, 255, 255);
    opacity: 0;
  }
  .dummy {
  height: 900px;
}
  .texto-titulo {
    text-align: center;
    color: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-top: 600px;
}
.texto-titulo h1 {
  font-family: 'futura-bold', sans-serif;
}
</style>