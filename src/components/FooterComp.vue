<template>
<!-- <div class="compon"> -->
    <footer>
        <div class="footer-bottom">
            <p>copyright &copy;2022 <router-link to="/">{{name || "Sample."}}</router-link>  </p>

            <div class="footer-menu">
                <ul>
                    <li><router-link :to="{name: 'Home'}">Home</router-link></li>
                    <li><router-link :to="{name: 'Form'}">Report</router-link></li>
                    <li><router-link :to="{name: 'Analytics'}">Analytics</router-link></li>
                </ul>
            </div>
        </div>
    </footer>
<!-- </div> -->
</template>

<script>
export default {
    name: 'footerBar',
    props: {
        name: String
    }
}

</script>

<style lang="css">

.compon {
    padding-top: 100px;
}

footer{
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgb(34, 34, 34);
    height: 100px;
    width: 100%;
    padding-top: 40px;
    color: #fff;
}

.footer-bottom{
    background: rgba(73, 73, 73, 0.35);
    width: 100%;
    padding: 20px;
    padding-bottom: 40px;
    text-align: center;
}

.footer-bottom p{
   float: left;
   font-size: 14px;
   word-spacing: 2px;
   text-transform: capitalize;
}
.footer-bottom p a{
  color:#44bae8;
  font-size: 16px;
  text-decoration: none;
  padding-left: 15px;
}
.footer-bottom span{
    text-transform: uppercase;
    opacity: .4;
    font-weight: 200;
}

.footer-menu{
  float: right;
}

.footer-menu ul{
  display: flex;
}

.footer-menu ul li{
padding-right: 10px;
display: block;
}

.footer-menu ul li a{
  color: #cfd2d6;
  text-decoration: none;
}

.footer-menu ul li a:hover{
  color: #27bcda;
}

</style>