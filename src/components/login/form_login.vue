<template>
    <div>
        
        <div class="login-wrap" :style="{ backgroundImage: `linear-gradient(#5b5b92, transparent) ,url(${backgroundLogin})` }">
           
            <div class="login-html">
                 <div class="group" style="margin:25px">
                    <a href="#">
                       <img :src="alibrateIcon" style="max-width: 132px;" alt="logo alibrate">
                    </a>
                </div>
                <div class="group">
                    <label class="lblIngresar uppercase">Ingresar</label>    
                </div>
                <div class="group">
                    <a href="#" style="font-size:1em;width:100%" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">
                       <img :src="faceIcon" class="uppercase" style="width:1em;margin-right: 7px;margin-top: -4px;"> registrarse con facebook
                    </a>
                </div>
                <div class="divider">
                    <div class="line"></div>
                    <div class="labelFromEmail uppercase">o con tu email</div>
                    <div class="line"></div>
                </div>
                <div class="login-form">
                    <div class="sign-in-htm">
                        <div class="group">
                            <label for="user" class="label">Email (o usuario si ya eres miembro)</label>
                            <input id="user" v-model="frmLogin.username" type="text" class="input color-black" placeholder="Ej flor@mail.com">
                        </div>
                        <div class="group">
                            <label for="pass" class="label">Contraseña</label>
                            <input id="pass" v-model="frmLogin.password" type="password" class="input color-black" data-type="password" placeholder="Ingresa tu contraseña">
                        </div>
                        <div class="group" style="margin-top:40px">
                            <label class="label forgot-password">¿Olvidaste tu contraseña?</label>
                        </div>
                        <div class="group" style="margin-top:25px">
                            <input type="submit" class="button" value="Ingresar" v-on:click="login">
                        </div>
                        <div class="group">
                            <label class="lblIngresar">¿No tenes una cuenta? <a style="color:#00daff">Registrate ahora</a></label>    
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import backgroundLogin from '../../assets/images/background-login.png'
import faceIcon from '../../assets/images/facebook-square-brands.svg'
import alibrateIcon from '../../assets/images/AlibrateLogoWhite.svg'
import axios from 'axios'
import qs from 'qs'
import {constants} from '../../../constants'

export default {
    data() {
        return {
            backgroundLogin,
            faceIcon,
            alibrateIcon,
            frmLogin : {
                username : '',
                password : ''
            }
        }
    },
    mounted () {
        if (this.$store.state.token)
            this.$router.push('home')         
    },
    methods : {
        login() {
            if (this.frmLogin.username && this.frmLogin.password) {

                let options = {
                    headers: {
                        'accept': 'application/json',
                        'content-type': 'application/x-www-form-urlencoded'
                    }
                };
                
                axios.post(
                    constants.REST_ALIBRATE_AUTH, 
                    qs.stringify({username : this.frmLogin.username, password : this.frmLogin.password}),
                    options
                ).then((rs) => {
                   
                    this.$store.dispatch('setToken', rs.data.access_token).then(() => {
                       this.$router.push('home') 
                    })
                }).catch((e) => {
                    console.log(e.response.data.message)
                    
                })

            }
                
        }




    }
}
</script>




<style scoped>


body {
    margin:0;
    color:#edf3ff;
    background:#c8c8c8;
    background:url(https://hdqwalls.com/download/material-design-4k-2048x1152.jpg) fixed;
    background-size: cover;
    font:600 16px/18px 'Open Sans',sans-serif;
}
:after,:before{box-sizing:border-box}
.clearfix:after,.clearfix:before{content:'';display:table}
.clearfix:after{clear:both;display:block}
a{color:inherit;text-decoration:none}

.login-wrap{
    width: 100%;
    margin:auto;
    max-width:510px;
    min-height:700px;
    position:relative;
    background-size: cover;
    box-shadow:0 12px 15px 0 rgba(0,0,0,.24),0 17px 50px 0 rgba(0,0,0,.19);
}
.login-html{
    width:100%;
    height:100%;
    position:absolute;
    padding:20px 70px 50px 70px;
    background:rgba(0,0,0,0.5);
}
.login-html .sign-in-htm{
    top:0;
    left:0;
    right:0;
    bottom:0;
    position:absolute;
    display: inline;
}

.login-html .tab {
    color: white;
}

.login-html .tab,
.login-form .group .label,
.login-form .group .button{
    text-transform:uppercase;
}
.login-html .tab{
    font-size:22px;
    margin-right:15px;
    padding-bottom:5px;
    margin:0 15px 10px 0;
    display:inline-block;
    border-bottom:2px solid transparent;
}
.login-html .sign-in:checked + .tab,
.login-html .for-pwd:checked + .tab{
    color:#fff;
    border-color:#1161ee;
}
.login-form{
    min-height:345px;
    position:relative;
    -webkit-perspective:1000px;
            perspective:1000px;
    -webkit-transform-style:preserve-3d;
            transform-style:preserve-3d;
}
.login-form .group{
    margin-bottom:15px;
}
.login-form .group .label,
.login-form .group .input,
.login-form .group .button{
    width:100%;
    color:#fff;
    display:block;
}
.login-form .group .input,
.login-form .group .button{
    border:none;
    padding:15px 20px;
    border-radius:5px;
    background:rgba(255,255,255, 1);
}
.login-form .group input[data-type="password"]{
    text-security:circle;
    -webkit-text-security:circle;
}
.login-form .group .label{
    color:white;
    font-size:12px;
    text-align: left;
}
.login-form .group .button{
    background:#1161ee;
}
.login-form .group label .icon{
    width:15px;
    height:15px;
    border-radius:2px;
    position:relative;
    display:inline-block;
    background:rgba(255,255,255,.1);
}
.login-form .group label .icon:before,
.login-form .group label .icon:after{
    content:'';
    width:10px;
    height:2px;
    background:#fff;
    position:absolute;
    -webkit-transition:all .2s ease-in-out 0s;
    transition:all .2s ease-in-out 0s;
}
.login-form .group label .icon:before{
    left:3px;
    width:5px;
    bottom:6px;
    -webkit-transform:scale(0) rotate(0);
            transform:scale(0) rotate(0);
}
.login-form .group label .icon:after{
    top:6px;
    right:0;
    -webkit-transform:scale(0) rotate(0);
            transform:scale(0) rotate(0);
}
.login-form .group .check:checked + label{
    color:#fff;
}
.login-form .group .check:checked + label .icon{
    background:#1161ee;
}
.login-form .group .check:checked + label .icon:before{
    -webkit-transform:scale(1) rotate(45deg);
            transform:scale(1) rotate(45deg);
}
.login-form .group .check:checked + label .icon:after{
    -webkit-transform:scale(1) rotate(-45deg);
            transform:scale(1) rotate(-45deg);
}
.login-html .sign-in:checked + .tab + .for-pwd + .tab + .login-form .sign-in-htm{
    -webkit-transform:rotate(0);
            transform:rotate(0);
}
.login-html .for-pwd:checked + .tab + .login-form .for-pwd-htm{
    -webkit-transform:rotate(0);
            transform:rotate(0);
}

.hr{
    height:2px;
    margin:60px 0 50px 0;
    background:rgba(255,255,255,.2);
}
.foot-lnk{
    text-align:center;
}


.divider {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.divider .line {
    background-color: #999;
    flex: 1;
    border: 0 solid;
    height: 1px;
}

.labelFromEmail {
    color: white;
    margin: 20px;
}

.forgot-password{
    font-size : 0.7em;
    text-align: center !important;
}

.lblIngresar {
    font-size : 1em;
    color: white;
    margin: 20px;
}

.uppercase{ 
    text-transform: uppercase;
}

.color-black {
    color:black !important;
}
</style>