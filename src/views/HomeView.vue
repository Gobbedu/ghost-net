<template>
<div class="homepage">
    <div class="hero-section">
        <div class="hero-content">
            <div style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); opacity: 1; transform-style: preserve-3d;" class="hero-heading">Login required.</div>
            <div style="opacity: 1; transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;" class="hero-subheading">To access site data and forms, please login with a registered account</div>
            <router-link :to="{name : 'Login'}">
                <button type="button" class="btn btn-primary btn-lg">
                    Login
                </button>
            </router-link>
      </div>
    </div>

    <div class="section-2" style="margin:50px">
        <h1 class="heading-2"></h1>
    </div>
</div>
</template>

<script>
export default {}
</script>

<style lang="css" scoped>
/* @media screen (min-width: 600px){
    .homepage {
    padding-bottom: 70px;
    background: rgb(34, 34, 34);
}
} */


.hero-section {
    position: relative;
    height: 500px;
    padding-top: 184px;
    background-image: linear-gradient(135deg, rgba(30, 33, 33, 0.82) 1%, rgba(32, 32, 32, 0.14) 98%), url(../assets/waves.jpg);
    background-position: 0px 0px, 50% 50%;
    background-size: auto, 650px;
}

.hero-heading {
    margin-bottom: 14px;
    color: #fff;
    font-size: 50px;
    line-height: 51px;
    letter-spacing: 2px;
}

.hero-subheading {
    margin-bottom: 30px;
    opacity: 1;
    font-family: Oxygen, sans-serif;
    color: hsla(0, 0%, 100%, 0.85);
    font-size: 18px;
    font-weight: 400;
}

.hero-content {
    text-align: center;
}

.button {
    padding: 12px 31px;
    border-radius: 3px;
    background-color: #dd783f;
    -webkit-transition: background-color 200ms ease, color 200ms ease;
    transition: background-color 200ms ease, color 200ms ease;
    font-family: Oxygen, sans-serif;
    color: #fff;
    font-size: 20px;
    line-height: 30px;
    font-weight: 700;

}
.w-button {
    display: inline-block;
    padding: 9px 15px;
    background-color: #3898EC;
    color: white;
    border: 0;
    line-height: inherit;
    text-decoration: none;
    cursor: pointer;
    border-radius: 0;
}

</style>
