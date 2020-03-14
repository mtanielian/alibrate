<template>
    <div>
        <div v-for="(person, index) in aPeople" class="row" style="background:white;margin-bottom:10px;height:90px" :key="person._id">
            <div class="col-6">
                <img 
                    :src="medals[index]"
                    style="width: 1.3em; position: absolute; padding-top: 5px; z-index: 9999;"
                >
                <img 
                    :src="person.profile.picture" 
                    alt="Imagen usuario" 
                    width="60" height="60" 
                    class="rounded-circle mCS_img_loaded" 
                    style="margin-top: 10px; margin-bottom: 10px; position: absolute;"
                >
                <img 
                    :src="`https://cdn.alibrate.com/flags/4x3/${(person.profile.country.code).toLocaleLowerCase()}.svg`" 
                    alt="bandera usuario" 
                    style="width: 25px; position: absolute; margin-top: 45px; margin-left: 50px;"

                >
                <label style="margin: 0px; margin-left: 70px; width: 60%; padding: 0px; padding-top: 15px;font-weight:bold">
                    {{person.username}}
                </label>
                <label style="color:#02a7e1;margin: 0px; margin-left: 70px; width: 60%; padding: 0px; padding-top: 5px; font-size:14px">
                   {{person.count}} puntos
                </label>
            </div>
            <div class="col-6" style="text-align:right">
                <button type="button" style="margin-top:15px" class="btn btn-primary">Seguir</button>
            </div>
        </div>
    </div>    
</template>


<script>
import axios from 'axios'
import medalGold from '../../assets/images/medal-pos-1.svg'
import medalBronze from '../../assets/images/medal-pos-2.svg'
import medalSilver from '../../assets/images/medal-pos-3.svg'


export default {
    props : ['ws'],
    created() {
        this.getData()
    },
    data () {
        return {
            medals : [
                medalGold,
                medalBronze,
                medalSilver
            ],
            aPeople : []
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
                this.ws.url + "?page=1&limit=3&byScore=true", 
                options
            ).then((rs) => {
               this.aPeople = rs.data

            }).catch((e) => {
                console.log(e)
            })


        }
    }

}
</script>

<style scoped>

</style>