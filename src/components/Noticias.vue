<template>
  <!-- <div id="mainNoticias">
      <h1 class="titulo">Notícias e Publicações</h1>
      <a class="todos" href="">TODOS</a>
      <a class="noticias" href="">NOTÍCIAS</a>
      <a class="informes" href="">INFORMES</a>
      <a class="cartilhas" href="">CARTILHAS</a>
      <a class="relampago" href="">AÇÃO RELÂMPAGO</a>
  </div> -->
    <div class="container-fluid" id="noticias">
        <div class="container wrapper"> 
            <div class="row">            
                <div class="col-12 my-5 text-left titulo">
                    <h2>Notícias e Publicações</h2>
                </div>
            </div>

            <div class="row">            
                <div class="col-12 text-center titulo">
                    <ul class="list-inline">
                        <li class="list-inline-item">
                            <a href="#">TODOS</a>
                        </li>
                        <li class="list-inline-item">
                            <a href="#">NOTÍCIAS</a>
                        </li>
                        <li class="list-inline-item">
                            <a href="#">INFORMES</a>
                        </li>
                        <li class="list-inline-item">
                            <a href="#">CARTILHAS</a>
                        </li>
                        <li class="list-inline-item">
                            <a href="#">AÇÃO RELÂMPAGO</a>
                        </li>
                    </ul>

                    <ul class="list-inline">
                        <li class="list-inline-item">
                            <a href="#">2018</a>
                        </li>
                        <li class="list-inline-item">
                            <a href="#">2019</a>
                        </li>
                        <li class="list-inline-item">
                            <a href="#">2020</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="row">

                
                <div class="col-12">

                <slick
                        ref="slick"
                        :options="slickOptions"
                        @afterChange="handleAfterChange"
                        @beforeChange="handleBeforeChange"
                        @breakpoint="handleBreakpoint"
                        @destroy="handleDestroy"
                        @edge="handleEdge"
                        @init="handleInit"
                        @reInit="handleReInit"
                        @setPosition="handleSetPosition"
                        @swipe="handleSwipe"
                        @lazyLoaded="handleLazyLoaded"
                        @lazyLoadError="handleLazeLoadError">               

                        <div class="card">
                            <img class="card-img-top" src="https://via.placeholder.com/100" alt="Card image cap">
                            <div class="card-body">
                                <p class="card-text data"><small>{{data}}</small></p>
                                <h5 class="card-title titulo"><strong>{{titulo}}</strong></h5>
                                <br>
                                <p class="card-text categoria"><strong>{{categoria}}</strong></p>
                            </div>
                        </div>

                        <div class="card">
                            <img class="card-img-top" src="https://via.placeholder.com/100" alt="Card image cap">
                            <div class="card-body">
                                <p class="card-text data"><small>{{data}}</small></p>
                                <h5 class="card-title titulo"><strong>{{titulo}}</strong></h5>
                                <br>
                                <p class="card-text categoria"><strong>{{categoria}}</strong></p>
                            </div>
                        </div>

                        <div class="card">
                            <img class="card-img-top" src="https://via.placeholder.com/100" alt="Card image cap">
                            <div class="card-body">
                                <p class="card-text data"><small>{{data}}</small></p>
                                <h5 class="card-title titulo"><strong>{{titulo}}</strong></h5>
                                <br>
                                <p class="card-text categoria"><strong>{{categoria}}</strong></p>
                            </div>
                        </div>
                        
                        <div class="card">
                            <img class="card-img-top" src="https://via.placeholder.com/100" alt="Card image cap">
                            <div class="card-body">
                                <p class="card-text data"><small>{{data}}</small></p>
                                <h5 class="card-title titulo"><strong>{{titulo}}</strong></h5>
                                <br>
                                <p class="card-text categoria"><strong>{{categoria}}</strong></p>
                            </div>
                        </div>

                        <div class="card">
                            <img class="card-img-top" src="https://via.placeholder.com/100" alt="Card image cap">
                            <div class="card-body">
                                <p class="card-text data"><small>{{data}}</small></p>
                                <h5 class="card-title titulo"><strong>{{titulo}}</strong></h5>
                                <br>
                                <p class="card-text categoria"><strong>{{categoria}}</strong></p>
                            </div>
                        </div>

                        <div class="card">
                            <img class="card-img-top" src="https://via.placeholder.com/100" alt="Card image cap">
                            <div class="card-body">
                                <p class="card-text data"><small>{{data}}</small></p>
                                <h5 class="card-title titulo"><strong>{{titulo}}</strong></h5>
                                <br>
                                <p class="card-text categoria"><strong>{{categoria}}</strong></p>
                            </div>
                        </div>

                    </slick>

                </div>
            </div>
        </div>
    </div>
</template>

<script>

import Slick from 'vue-slick';

export default {
    components: { Slick },
    data() {
        return {
            data: 'Publicado em 01/10/2000',
            titulo: 'Título do Post',
            categoria: 'CATEGORIA',
            slickOptions: {
                dots: true,
                autoplay: true,
                slidesToShow: 4,
                slidesToScroll: 5,
                autoplaySpeed: 2000,
                responsive: [
                    {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 5,
                        infinite: true,
                        dots: true
                    }
                    },
                    {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                    },
                    {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                    }
                    // You can unslick at a given breakpoint now by adding:
                    // settings: "unslick"
                    // instead of a settings object
                ]

                // Any other options that can be got from plugin documentation
            },
        };
    },

    // All slick methods can be used too, example here
    methods: {
        next() {
            this.$refs.slick.next();
        },

        prev() {
            this.$refs.slick.prev();
        },

        reInit() {
            // Helpful if you have to deal with v-for to update dynamic lists
            this.$nextTick(() => {
                this.$refs.slick.reSlick();
            });
        },

        // Events listeners
        handleAfterChange(event, slick, currentSlide) {
            console.log('handleAfterChange', event, slick, currentSlide);
        },
        handleBeforeChange(event, slick, currentSlide, nextSlide) {
            console.log('handleBeforeChange', event, slick, currentSlide, nextSlide);
        },
        handleBreakpoint(event, slick, breakpoint) {
            console.log('handleBreakpoint', event, slick, breakpoint);
        },
        handleDestroy(event, slick) {
            console.log('handleDestroy', event, slick);
        },
        handleEdge(event, slick, direction) {
            console.log('handleEdge', event, slick, direction);
        },
        handleInit(event, slick) {
            console.log('handleInit', event, slick);
        },
        handleReInit(event, slick) {
            console.log('handleReInit', event, slick);
        },
        handleSetPosition(event, slick) {
            console.log('handleSetPosition', event, slick);
        },
        handleSwipe(event, slick, direction) {
            console.log('handleSwipe', event, slick, direction);
        },
        handleLazyLoaded(event, slick, image, imageSource) {
            console.log('handleLazyLoaded', event, slick, image, imageSource);
        },
        handleLazeLoadError(event, slick, image, imageSource) {
            console.log('handleLazeLoadError', event, slick, image, imageSource);
        },
    },
}
</script>

<style>
    #noticias {
        background-color: #f5f5f5;
        padding: 3em 0 5em !important; 
    }
    #noticias .card {
        border: none;
    }
    /* the slides */
    .slick-slide {
        margin: 0 10px !important;
    }
    /* the parent */
    .slick-list {
        margin: 0 -10px !important;
    }
    .data {
        font-family: 'Futura';
        font-weight: bold;
        font-size: 24px;
        line-height: 36px;
        text-align: center;
        color: #005CA9;
    }
    .titulo {
        font-family: 'Open Sans', sans-serif;
        font-size: 16px;
        text-align: center;
        color: #005CA9;
    }
    .categoria {
        font-family: 'Open Sans', sans-serif;
        font-weight: bold;
        font-size: 18px;
        line-height: 36px;
        text-align: center;
        color: #005CA9;
    }
    .slick-prev:before, .slick-next:before {
        color: #005CA9;
    }
</style>