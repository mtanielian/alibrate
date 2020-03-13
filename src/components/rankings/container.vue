<template>
    <div>
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
        <div class="row">
             <img 
                :src="this.user.userInfo.profile.picture" 
                alt="Imagen usuario" 
                width="60" height="60" 
                class="rounded-circle mCS_img_loaded" 
                style="margin-top: 10px; margin-bottom: 10px; position: absolute;"
            >
            <h5 style="margin: 0px; margin-left: 70px; width: 60%; padding: 0px; padding-top: 15px;">
                {{this.user.userInfo.displayName}}
            </h5>
            <h5 style="margin: 0px; margin-left: 70px; width: 60%; padding: 0px; padding-top: 5px;">
                Tus posiciones en los diferentes rankings
            </h5>
        </div>
        <carouselGenre></carouselGenre>
    </div>
</template>



<script>
import carouselGenre from './carousel_ranking_genre'
export default {
    components : {carouselGenre},

    data() {
        return {
            user : this.$store.state.data_user
        }
    }


}
</script>

<style scoped>

@media only screen and (max-width: 600px) {
    #header-ranking {
        display: none;
    }

    .card {
        width : 28rem !important;
    }

}


</style>