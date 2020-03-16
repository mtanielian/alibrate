<template>
    <div>
        <div style="background: #f5f5f5">
            <div id="header-ranking"
                style="background: #666 url('https://cdn.alibrate.com/images/bg-rankings.jpg') center; height: 160px;" 
                class="header-int hidden-xs"
            >
                <div class="container text-left ptl" style="margin-left:10px">
                    <h1 class="h2 light-grey text-uppercase mtl" style="color: white;font-weight: bold;padding-top: 50px;">
                        Rankings
                    </h1>
                </div>
            </div>
            <positions id="positionsWeb"></positions>
            <carouselGenre ></carouselGenre>
            <div style="margin-top:20px">
                <div class="row">
                    <div class="col-12">
                        <h2 class="text-uppercase" style="font-weight:bold">Ranking general</h2>
                    </div>
                    <div class="col-xl-5 offset-md-1 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <label style="font-size:18px;font-weight:bold">Mejores reseñadores </label>
                        <contentGeneric :ws="this.ws_top_more_likes_in_reviews"></contentGeneric>
                        <div style="margin:20px;color: #02a7e1; cursor:pointer" v-on:click='openModal(ws_top_more_likes_in_reviews)'>
                            Ver Todos <i class="fas fa-sort-down" style="margin-bottom:3px; margin-left: 5px;"></i>
                        </div>
                    </div>
                    <div class="col-xl-5 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <label style="font-size:18px;font-weight:bold">Libros más leídos </label>
                        <contentBooks :ws="this.ws_top_books_readed_in_libraries"></contentBooks>
                        <div style="margin:20px;color: #02a7e1; cursor:pointer" v-on:click='openModalBooks(ws_top_books_readed_in_libraries)'>
                            Ver Todos <i class="fas fa-sort-down" style="margin-bottom:3px; margin-left: 5px;"></i>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xl-5 offset-md-1 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <label style="font-size:18px;font-weight:bold">Los que más reseñan </label>
                        <contentGeneric :ws="this.ws_top_reviewers"></contentGeneric>
                        <div style="margin:20px;color: #02a7e1; cursor:pointer" v-on:click='openModal(ws_top_reviewers)'>
                            Ver Todos <i class="fas fa-sort-down" style="margin-bottom:3px; margin-left: 5px;"></i>
                        </div>
                    </div>
                    <div class="col-xl-5 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <label style="font-size:18px;font-weight:bold">Lectores con más seguidores </label>
                        <contentGeneric class="container" :ws="this.ws_top_more_followed"></contentGeneric>
                        <div style="margin:20px;color: #02a7e1; cursor:pointer" v-on:click='openModal(ws_top_more_followed)'>
                            Ver Todos <i class="fas fa-sort-down" style="margin-bottom:3px; margin-left: 5px;"></i>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xl-5 offset-md-1 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <label style="font-size:18px;font-weight:bold">Lectores con mejores textos </label>
                        <contentGeneric :ws="this.ws_top_more_likes_in_texts"></contentGeneric>
                        <div style="margin:20px;color: #02a7e1; cursor:pointer" v-on:click='openModal(ws_top_more_likes_in_texts)'>
                            Ver Todos <i class="fas fa-sort-down" style="margin-bottom:3px; margin-left: 5px;"></i>
                        </div>
                    </div>
                    <div class="col-xl-5 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <label style="font-size:18px;font-weight:bold">Lectores con mejores listas </label>
                        <contentGeneric class="container" :ws="this.ws_top_more_likes_in_lists"></contentGeneric>
                        <div style="margin:20px;color: #02a7e1; cursor:pointer" v-on:click='openModal(ws_top_more_likes_in_lists)'>
                            Ver Todos <i class="fas fa-sort-down" style="margin-bottom:3px; margin-left: 5px;"></i>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xl-5 offset-md-1 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <label style="font-size:18px;font-weight:bold">Lectores con mejores citas </label>
                        <contentGeneric :ws="this.ws_top_more_likes_in_quotes"></contentGeneric>
                        <div style="margin:20px;color: #02a7e1; cursor:pointer" v-on:click='openModal(ws_top_more_likes_in_quotes)'>
                            Ver Todos <i class="fas fa-sort-down" style="margin-bottom:3px; margin-left: 5px;"></i>
                        </div>
                    </div>
                    <div class="col-xl-5 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <label style="font-size:18px;font-weight:bold">Lectores con mejores imágenes </label>
                        <contentGeneric class="container" :ws="this.ws_top_more_likes_in_images"></contentGeneric>
                        <div style="margin:20px;color: #02a7e1; cursor:pointer" v-on:click='openModal(ws_top_more_likes_in_images)'>
                            Ver Todos <i class="fas fa-sort-down" style="margin-bottom:3px; margin-left: 5px;"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <modal></modal>
        <modalBooks></modalBooks>
    </div>
</template>



<script>
import { constants } from '../../../constants'
import carouselGenre from './carousel_ranking_genre'
import positions from './positions'
import contentGeneric from './content_generic'
import contentBooks from './content_books'
import modal from './modal_generic'
import modalBooks from './modal_books'



export default {
    components : {carouselGenre, positions, contentGeneric, contentBooks, modal, modalBooks},
    mounted() {
        
    },
    data() {
        return {
            user : this.$store.state.data_user,
            // Mejores reseñadores
            ws_top_more_likes_in_reviews : constants.ALIBRATE.RANKINGS.TOP_MORE_LIKES_IN_REVIEWS,
            // Libros más leídos
            ws_top_books_readed_in_libraries : constants.ALIBRATE.RANKINGS.TOP_BOOK_READED_IN_LIBRARIES,
             // Los que más reseñan
            ws_top_reviewers : constants.ALIBRATE.RANKINGS.TOP_REVIEWERS,
               //Lectores con más seguidores
            ws_top_more_followed : constants.ALIBRATE.RANKINGS.TOP_MORE_FOLLOWED,
            //Lectores con mejores citas
            ws_top_more_likes_in_quotes : constants.ALIBRATE.RANKINGS.TOP_MORE_LIKES_IN_QUOTES,
            // Lectores con mejores listas
            ws_top_more_likes_in_lists : constants.ALIBRATE.RANKINGS.TOP_MORE_LIKES_IN_LISTS,
            //Lectores con mejores imágenes
            ws_top_more_likes_in_images : constants.ALIBRATE.RANKINGS.TOP_MORE_LIKES_IN_IMAGES,
            //Lectores con mejores textos
            ws_top_more_likes_in_texts : constants.ALIBRATE.RANKINGS.TOP_MORE_LIKES_IN_TEXTS,
        }
    },
    methods : {
        openModal(params) {
            this.$root.$emit('loadDataModal', params)
        },

        openModalBooks(params) {
            this.$root.$emit('loadDataModalBooks', params)
        }
    }
}
</script>

<style scoped>

@media only screen and (max-width: 600px) {
    #header-ranking {
        display: none;
    }

    #positionsWeb {
        display : none;
    
    }
}
</style>