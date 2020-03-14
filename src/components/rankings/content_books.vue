<template>
    <div class="container">
        <div v-for="(book, index) in aBooks" class="row" style="background:white;margin-bottom:10px;height:90px" :key="book._id">
            
            <div style="width: 1.3em;" class="col-1">
                {{index + 1}}
            </div>
            <div class="col-2">
                <img 
                    :src="`https://covers.alibrate.com/${book.cover}/small`" 
                    alt="Imagen libro" 
                    width="60" height="85" 
                >
            </div>
            <div class="col-6" style="line-height: 0.8;text-align: left;"> 
                <label style="font-size:10px">
                    {{book.genre}}
                </label>
                <label style="font-size:12px;font-weight:bold">
                {{book.title}}
                </label>
                <label style="font-size:12px;">
                {{book.author}}
                </label>
                <label style="font-size:10px;">
                {{book.count}}
                </label>
            </div>

            <div class="col-3" style="text-align:right">
                <button type="button" style="margin-top:15px" class="btn btn-primary">Seguir</button>
            </div>
        </div>
    </div>    
</template>


<script>
import axios from 'axios'

export default {
    props : ['ws'],
    created() {
        this.getData()
    },
    data () {
        return {
            aBooks : []
        }
    },
    methods : {
        getData() {
             let options = {
                headers: {
                    'accept': 'application/json',
                    'content-type': 'application/x-www-form-urlencoded',
                    common : {'Authorization': "Bearer " + this.$store.state.token}
                }
            };

            axios.get(
                this.ws.url + "?page=1&limit=3", 
                options
            ).then((rs) => {
               this.aBooks = rs.data

            }).catch((e) => {
                console.log(e)
            })


        }
    }

}
</script>

<style scoped>
.label {
    margin-bottom: .3rem;
    clear: both;
}
</style>