<!-- <template>
    <div data-collapse="tiny" data-animation="over-right" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="navbar w-nav" style="opacity: 1;">
        <div class="container-3 w-container">
            <router-link to="/" aria-current="page" class="logo w-nav-brand w--current" aria-label="home">
                <div class="long-text">{{name || "Sample."}}</div>
            </router-link>
            <nav role="navigation" class="nav-menu w-nav-menu">
                <router-link to="/" aria-current="page" class="nav-link w-nav-link w--current" style="max-width: 728px;">Home</router-link>
                <router-link to="/form" class="nav-link w-nav-link" style="max-width: 728px;">FORMS</router-link>
                <router-link to="/analytics" class="nav-link w-nav-link" style="max-width: 728px;">ANALYTICS</router-link>
                <router-link to="/contact" class="nav-link w-nav-link" style="max-width: 728px;">Contact</router-link>
            </nav>
        </div>
    </div> 
</template>

<style>
element.style {
    transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    opacity: 1;
    transform-style: preserve-3d;
}
@media screen and (max-width: 991px){
    .hero-heading {
        font-size: 40px;
}
}
.hero-heading {
    margin-bottom: 14px;
    color: #fff;
    font-size: 50px;
    line-height: 51px;
    letter-spacing: 2px;
}

.hero-content {
    text-align: center;
}
@media screen and (max-width: 991px){
    .w-container {
        max-width: 728px;
}
}
.w-container {
    margin-left: auto;
    margin-right: auto;
    max-width: 940px;
}
.long-text {
    margin-top: 7px;
    color: #fff;
    font-size: 26px;
    line-height: 26px;
}
* {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

.nav-link.w--current {
    border-radius: 0px;
    background-color: #000;
    opacity: 1;
    color: #fff;
}
.w-nav-link.w--current {
    color: #0082f3;
}
.nav-link {
    display: inline-block;
    padding: 10px 20px;
    background-color: #000;
    opacity: 0.7;
    -webkit-transition: opacity 200ms ease, -webkit-transform 200ms ease;
    transition: opacity 200ms ease, -webkit-transform 200ms ease;
    transition: opacity 200ms ease, transform 200ms ease;
    transition: opacity 200ms ease, transform 200ms ease, -webkit-transform 200ms ease;
    font-family: Oxygen, sans-serif;
    color: #fff;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.6px;
    text-decoration: none;
    text-transform: uppercase;
}
.w-nav-link {
    position: relative;
    display: inline-block;
    vertical-align: top;
    text-decoration: none;
    color: #222222;
    padding: 20px;
    text-align: left;
    margin-left: auto;
    margin-right: auto;
}
a {
    color: #dd783f;
    text-decoration: none;
}
a {
    background-color: transparent;
}
* {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
user agent stylesheet
a:-webkit-any-link {
    color: -webkit-link;
    cursor: pointer;
    text-decoration: underline;
}


@media screen and (max-width: 767px){
    .w-nav-brand {
        padding-left: 10px;
}
}
.w-nav-brand {
    position: relative;
    float: left;
    text-decoration: none;
    color: #333333;
}
@media screen and (max-width: 767px){
    .w-nav-brand {
        padding-left: 10px;
}
}
a {
    color: #dd783f;
    text-decoration: none;
}
a {
    background-color: transparent;
}
* {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
user agent stylesheet
a:-webkit-any-link {
    color: -webkit-link;
    cursor: pointer;
    text-decoration: underline;
}
.navbar {
    position: absolute;
    left: 0px;
    top: 0px;
    right: 0px;
    padding-top: 17px;
    padding-bottom: 17px;
    background-color: transparent;
    background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.33)), color-stop(99%, transparent));
    background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.33), transparent 99%);
}

.w-nav {
    position: relative;
    background: #dddddd;
    z-index: 1000;
}

* {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
div {
    display: block;
}
body {
    font-family: Lora, sans-serif;
    color: #333;
    font-size: 14px;
    line-height: 20px;
}
.w-nav:before, .w-nav:after {
    content: " ";
    display: table;
    grid-column-start: 1;
    grid-row-start: 1;
    grid-column-end: 2;
    grid-row-end: 2;
}
.w-nav:after {
    clear: both;
}

.container-3 {
    background-color: transparent;
}
@media screen and (max-width: 991px){
.w-container {
    max-width: 728px;
}
}
.w-container {
    margin-left: auto;
    margin-right: auto;
    max-width: 940px;
}
* {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
user agent stylesheet
div {
    display: block;
}
body {
    font-family: Lora, sans-serif;
    color: #333;
    font-size: 14px;
    line-height: 20px;
}
body {
    margin: 0;
    min-height: 100%;
    background-color: #fff;
    /* font-family: Arial,sans-serif; */
    font-size: 14px;
    line-height: 20px;
    color: #333;
}
html {
    font-family: sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
}
.w-container:before, .w-container:after {
    content: " ";
    display: table;
    grid-column-start: 1;
    grid-row-start: 1;
    grid-column-end: 2;
    grid-row-end: 2;
}
.w-container:after {
    clear: both;
}
.w-container:before, .w-container:after {
    content: " ";
    display: table;
    grid-column-start: 1;
    grid-row-start: 1;
    grid-column-end: 2;
    grid-row-end: 2;
}
.nav-menu {
    background-color: transparent;
    color: #fff;
    text-transform: uppercase;
}
.w-nav-menu {
    position: relative;
    float: right;
}
article, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section, summary {
    display: block;
}
* {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
user agent stylesheet
nav {
    display: block;
}
body {
    font-family: Lora, sans-serif;
    color: #333;
    font-size: 14px;
    line-height: 20px;
}
body {
    margin: 0;
    min-height: 100%;
    background-color: #fff;
    /* font-family: Arial,sans-serif; */
    font-size: 14px;
    line-height: 20px;
    color: #333;
}
</style>

<script>
export default {
    props: {
        name: String
    }
};
</script> -->

<template>
    <div>
        <ul>
            <li><router-link to="/" class="company" >{{name || "Sample."}}</router-link></li>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/report">Report</router-link></li>
            <li><router-link to="/analytics">Analytics</router-link></li>
            <li><router-link to="/admin">Admin</router-link></li>

            <li class="right"><router-link to="/login">Login</router-link></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "NavBar",
        props: {
            name: String
        }
    }
</script>

<style lang="css" scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: rgba(53, 53, 53, 0.932);
}

li {
  float: left;
}

li.right {
    float: right;
}
li.right a {
    padding: 24px 60px;
}

.company {
    font-weight: bolder;
    padding: 24px 60px;
    font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}

li a {
    display: block;
    color: white;
    text-align: center;
    padding: 24px 26px;
    text-decoration: none;
}

/* Change the link color to #111 (black) on hover */
li a:hover {
  background-color: rgb(36, 36, 36);
}
</style>

