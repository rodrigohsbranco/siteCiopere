<template>
    <div class="row" id="mainNavbar">
        <nav class="navbar navbar-fixed-top navbar-expand-md navbar-dark">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSite">
                <span class="navbar-toggler-icon"></span>
            </button>
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
                    <li class="navbar-item dropdown">
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
</template>

<script>
export default {
    data() {
        return {
            exemplo: 2 + 2
        }
    }
}
</script>

<style>
.navbar {
  position: relative;
  height: 42px;
  text-align: left;
  padding: .75rem 2rem;
  color: #fff;
  display: flex;
  align-items: center;
}
#mainNavbar {
  background: #005CA9;
}
.nav-link {
  font-size: 15px;
  color: #fff;
  text-decoration: none;
  cursor: pointer !important;
}
</style>