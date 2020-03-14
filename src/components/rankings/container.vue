<template>
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
        <div class="container" style="margin-top:20px">
            <div class="row">
                <div class="col-12">
                    <h2 class="text-uppercase" style="font-weight:bold">Ranking general</h2>
                </div>
                <div class="col-xl-5 offset-md-1 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <label style="font-size:18px;font-weight:bold">Mejores reseñadores </label>
                    <contentGeneric :ws="this.ws_top_more_likes_in_reviews"></contentGeneric>
                </div>
                <div class="col-xl-5 col-lg-12 col-md-12 col-sm-12 col-xs-12" 
                style="font-size:18px;font-weight:bold">
                    <label style="font-size:18px;font-weight:bold">Libros más leídos </label>
                    <contentBooks :ws="this.ws_top_books_readed_in_libraries"></contentBooks>
                </div>
            </div>
        </div>
    </div>
</template>



<script>
import carouselGenre from './carousel_ranking_genre'
import positions from './positions'
import contentGeneric from './content_generic'
import contentBooks from './content_books'

import { constants } from '../../../constants'


export default {
    components : {carouselGenre, positions, contentGeneric, contentBooks},
    mounted() {
        
    },
    data() {
        return {
            user : this.$store.state.data_user,
            ws_top_more_likes_in_reviews : constants.ALIBRATE.RANKINGS.TOP_MORE_LIKES_IN_REVIEWS,
            ws_top_books_readed_in_libraries : constants.ALIBRATE.RANKINGS.TOP_BOOK_READED_IN_LIBRARIES
            
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