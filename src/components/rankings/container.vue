<template>
    <div>
        <div id="header-ranking"
            style="background: #666 url('https://cdn.alibrate.com/images/bg-rankings.jpg') center; height: 160px;" 
            class="header-int hidden-xs"
        >
            <div class="container text-left ptl">
                <h1 class="h2 light-grey text-uppercase mtl">Rankings</h1>
            </div>
        </div>

        <div style="margin-top:20px">
            <label style="float:left;margin-left: 20px;font-size: 20px;font-weight:bold">Rankings por género</label>
            <label style="float:right; margin-right: 60px;font-size: 12px; color: grey;">Ver Todos</label>
        </div>
        <div class="container-fluid">
            <div id="carousel-example" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner row w-100 mx-auto" role="listbox">

                    <div v-for="ranking in aRanking" class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3" v-bind:key="ranking._id" >
                        <div class="card" style="width: 18rem;">
                            <img :src="cdn + ranking.imageThumb" class="card-img-top" alt="...">
                            
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>

                <a class="carousel-control-prev" href="#carousel-example" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carousel-example" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
    </div>
</template>



<script>

import axios from 'axios'
import {constants} from '../../../constants'
//import qs from 'qs'
import store from '../../store'
export default {
    mounted() {
this.getRankings();

console.log(store.state.token);

        
       


        // Necesario para que el carousel no se solape y haga el loop de manera correcta
        jQuery('#carousel-example').on('slide.bs.carousel', function (e) {
            var $e = jQuery(e.relatedTarget);
            var idx = $e.index();
            var itemsPerSlide = 5;
            var totalItems = jQuery('.carousel-item').length;
        
            if (idx >= totalItems-(itemsPerSlide-1)) {
                var it = itemsPerSlide - (totalItems - idx);
                for (var i=0; i<it; i++) {
                    // append slides to end
                    if (e.direction=="left") {
                        jQuery('.carousel-item').eq(i).appendTo('.carousel-inner');
                    }
                    else {
                        jQuery('.carousel-item').eq(0).appendTo('.carousel-inner');
                    }
                }
            }
        });
  

    },

    data() {
        return {
            cdn : "https://cdn.alibrate.com/",
            aRanking : []
        }
    
    },
  
    methods: {
        getRankings() {
            let options = {
                headers: {
                    'accept': 'application/json',
                    'content-type': 'application/x-www-form-urlencoded',
                    common : {'Authorization': "Bearer " + store.state.token}
                }
            };


            axios.get(
                constants.ALIBREATE.RANKINGS.BOOKS_GENRES.url + "?page=1&limit=100", 
                options
            ).then((rs) => {
                this.aRanking = rs.data.docs
                console.log(this.aRanking)
            }).catch((e) => {
                console.log(e)
                
            })
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

/*

CC 2.0 License Iatek LLC 2018
Attribution required

*/


@media (min-width: 768px) and (max-width: 991px) {
  /* Show 4th slide on md  if col-md-4*/
    .carousel-inner .active.col-md-4.carousel-item + .carousel-item + .carousel-item + .carousel-item {
        position: absolute;
        top: 0;
        right: -33.3333%;  /*change this with javascript in the future*/
        z-index: -1;
        display: block;
        visibility: visible;
    }

}

@media (min-width: 576px) and (max-width: 768px) {
  /* Show 3rd slide on sm  if col-sm-6*/
    .carousel-inner .active.col-sm-6.carousel-item + .carousel-item + .carousel-item {
        position: absolute;
        top: 0;
        right: -50%;  /*change this with javascript in the future*/
        z-index: -1;
        display: block;
        visibility: visible;
    }

}
@media (min-width: 576px) {
	
    .carousel-item {
        margin-right: 0;
    }

    /* show 2 items */
    .carousel-inner .active + .carousel-item {
        display: block;
    }
    
    .carousel-inner .carousel-item.active:not(.carousel-item-right):not(.carousel-item-left),
    .carousel-inner .carousel-item.active:not(.carousel-item-right):not(.carousel-item-left) + .carousel-item {
        transition: none;
    }

    .carousel-inner .carousel-item-next {
      position: relative;
      transform: translate3d(0, 0, 0);
    }
    
    /* left or forward direction */
    .active.carousel-item-left + .carousel-item-next.carousel-item-left,
    .carousel-item-next.carousel-item-left + .carousel-item,
    .carousel-item-next.carousel-item-left + .carousel-item + .carousel-item {
        position: relative;
        transform: translate3d(-100%, 0, 0);
        visibility: visible;
    } 
    
    /* farthest right hidden item must be abso position for animations */
    .carousel-inner .carousel-item-prev.carousel-item-right {
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        display: block;
        visibility: visible;
    }
    
    /* right or prev direction */
    .active.carousel-item-right + .carousel-item-prev.carousel-item-right,
    .carousel-item-prev.carousel-item-right + .carousel-item,
    .carousel-item-prev.carousel-item-right + .carousel-item + .carousel-item {
        position: relative;
        transform: translate3d(100%, 0, 0);
        visibility: visible;
        display: block;
        visibility: visible;
    }

}

/*MD*/
@media (min-width: 768px) {

    /* show 3rd of 3 item slide */
  .carousel-inner .active + .carousel-item + .carousel-item {
        display: block;
    }
 
    .carousel-inner .carousel-item.active:not(.carousel-item-right):not(.carousel-item-left) + .carousel-item + .carousel-item {
        transition: none;
    }
  
    
    .carousel-inner .carousel-item-next {
      position: relative;
      transform: translate3d(0, 0, 0);
    }
    
    
    /* left or forward direction */
    .carousel-item-next.carousel-item-left + .carousel-item + .carousel-item + .carousel-item {
        position: relative;
        transform: translate3d(-100%, 0, 0);
        visibility: visible;
    }
    
    /* right or prev direction */
    .carousel-item-prev.carousel-item-right + .carousel-item + .carousel-item + .carousel-item {
        position: relative;
        transform: translate3d(100%, 0, 0);
        visibility: visible;
        display: block;
        visibility: visible;
    }

}


/*LG */
@media (min-width: 991px) {

    /* show 4th item */
    .carousel-inner .active + .carousel-item + .carousel-item + .carousel-item {
        display: block;
    }
    
    .carousel-inner .carousel-item.active:not(.carousel-item-right):not(.carousel-item-left) + .carousel-item + .carousel-item + .carousel-item {
        transition: none;
    }
    
    /* Show 5th slide on lg if col-lg-3 */
    .carousel-inner .active.col-lg-3.carousel-item + .carousel-item + .carousel-item + .carousel-item + .carousel-item {
        position: absolute;
        top: 0;
        right: -25%;  /*change this with javascript in the future*/
        z-index: -1;
        display: block;
        visibility: visible;
    }
    
    /* left or forward direction */
    .carousel-item-next.carousel-item-left + .carousel-item + .carousel-item + .carousel-item + .carousel-item {
        position: relative;
        transform: translate3d(-100%, 0, 0);
        visibility: visible;
    }
    
    /* right or prev direction //t - previous slide direction last item animation fix */
    .carousel-item-prev.carousel-item-right + .carousel-item + .carousel-item + .carousel-item + .carousel-item {
        position: relative;
        transform: translate3d(100%, 0, 0);
        visibility: visible;
        display: block;
        visibility: visible;
    }

}

/*LG 6th  -  if you want a carousel with 6 slides */
@media (min-width: 991px) {

        /* show 5th and 6th item */
 /*   .carousel-inner .active + .carousel-item + .carousel-item + .carousel-item + .carousel-item,
  .carousel-inner .active + .carousel-item + .carousel-item + .carousel-item + .carousel-item + .carousel-item {
        display: block;
    }

    
  
    .carousel-inner .carousel-item.active:not(.carousel-item-right):not(.carousel-item-left) + .carousel-item + .carousel-item + .carousel-item + .carousel-item,
  .carousel-inner .carousel-item.active:not(.carousel-item-right):not(.carousel-item-left) + .carousel-item + .carousel-item + .carousel-item + .carousel-item + .carousel-item {
      transition: none;
    }
*/
    
  
  /*show 7th slide for animation when its a 6 slides carousel */
 /*      .carousel-inner .active.carousel-item + .carousel-item + .carousel-item + .carousel-item + .carousel-item + .carousel-item  + .carousel-item {
        position: absolute;
        top: 0;
        right: -16.666666666%;
        z-index: -1;
        display: block;
        visibility: visible;
  }
  */
  
      /* forward direction > */
 /*   .carousel-item-next.carousel-item-left + .carousel-item + .carousel-item + .carousel-item + .carousel-item,
  .carousel-item-next.carousel-item-left + .carousel-item + .carousel-item + .carousel-item + .carousel-item + .carousel-item {
        position: relative;
        transform: translate3d(-100%, 0, 0);
        visibility: visible;
    }
  */
      /* prev direction < last item animation fix */
 /*   .carousel-item-prev.carousel-item-right + .carousel-item + .carousel-item + .carousel-item + .carousel-item + .carousel-item,
    .carousel-item-prev.carousel-item-right + .carousel-item + .carousel-item + .carousel-item + .carousel-item + .carousel-item + .carousel-item {
        position: relative;
        transform: translate3d(100%, 0, 0);
        visibility: visible;
        display: block;
        visibility: visible;
    }
*/

@mixin make-container($gutter: $grid-gutter-width) {
  width: 100%;
  padding-right: $gutter / 2;
  padding-left: $gutter / 2;
  margin-right: auto;
  margin-left: auto;
}



@mixin make-container-max-widths($max-widths: $container-max-widths, $breakpoints: $grid-breakpoints) {
  @each $breakpoint, $container-max-width in $max-widths {
    @include media-breakpoint-up($breakpoint, $breakpoints) {
      max-width: $container-max-width;
    }
  }
}

@mixin make-row($gutter: $grid-gutter-width) {
  display: flex;
  flex-wrap: wrap;
  margin-right: -$gutter / 2;
  margin-left: -$gutter / 2;
}

@mixin make-col-ready($gutter: $grid-gutter-width) {
  position: relative;
  width: 100%;
  padding-right: $gutter / 2;
  padding-left: $gutter / 2;
}

@mixin make-col($size, $columns: $grid-columns) {
  flex: 0 0 percentage($size / $columns);
  max-width: percentage($size / $columns);
}

@mixin make-col-offset($size, $columns: $grid-columns) {
  $num: $size / $columns;
  margin-left: if($num == 0, 0, percentage($num));
}


}

</style>