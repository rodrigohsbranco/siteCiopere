<template>
  <div id="mainRodape">
      <footer class="footer">
          <div class="footer-info">
              <img src="../assets/images/logo.png" alt="SUBAN" class="logo-suban">
              <span>2020 - CIOPE RE - Operações Bancárias Recife</span>
              <span>Versão 1.3.7</span>
          </div>
          <div class="assinatura">
              <img src="../assets/images/logoCaixa.png" alt="Logo Caixa" class="logo-caixa">
          </div>
      </footer>
  </div>
</template>

<script>
export default {

}
</script>

<style>

    * {
    box-sizing: border-box;
}

img {
    max-width: 100%;
    vertical-align: bottom;
}

    .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1.25rem;
    height: 80px;
    font-family: futura;
    background: #EFF5F6;
}

.footer-info {
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.footer-info > * {
    margin-right: 1.75rem;
}

.logo-suban {
    width: auto;
    height: 64px;
}

.assinatura {
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.assinatura > *:last-child {
    margin-right: 0;
}

.logo-caixa {
    width: auto;
    height: 24px;
}
</style>