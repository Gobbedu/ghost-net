<!-- <template>
    <div class="main-section dark wf-section">
        <div class="footer-section">
            <div class="w-container">
                <div class="w-row">
                    <div class="w-col w-col-4 w-col-small-4">
                        <a href="/" aria-current="page" class="footer-logo w-inline-block w--current">
                            <div class="long-text">{{name || "Sample."}}</div>
                        </a>
                    </div>
                    <div class="footer-links w-col w-col-8 w-col-small-8">
                        <router-link to="/" aria-current="page" class="footer-link w--current">Home</router-link>
                        <router-link to="/form" class="footer-link">Forms</router-link>
                        <router-link to="/analytics" class="footer-link">analytics</router-link>
                        <router-link to="/contact" class="footer-link">Contact</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="endoffotter"></div>
</template>


<style>
.endoffooter {
    margin-top: 100px;
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
<!-- <div class="compon"> -->
    <footer>
        <div class="footer-bottom">
            <p>copyright &copy;2022 <router-link to="/">{{name || "Sample."}}</router-link>  </p>

            <div class="footer-menu">
                <ul>
                    <li>
                        <router-link to="/">Home</router-link>
                    </li>
                    <li>
                        <router-link to="/report">Report</router-link>
                    </li>
                    <li>
                        <router-link to="/analytics">analytics</router-link>
                    </li>
                    <li>
                        <router-link to="/admin">Admin</router-link>
                    </li>
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
    width: 100vw;
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