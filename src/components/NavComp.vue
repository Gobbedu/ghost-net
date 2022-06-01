<template>
    <div data-collapse="tiny" data-animation="over-right" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="navbar w-nav" style="opacity: 1;">
        <div class="container-3 w-container">
            <router-link to="/" aria-current="page" class="logo w-nav-brand w--current" aria-label="home">
                <div class="long-text">Sample.</div>
            </router-link>
            <nav role="navigation" class="nav-menu w-nav-menu">
                <router-link to="/" aria-current="page" class="nav-link w-nav-link w--current" style="max-width: 728px;">Home</router-link>
                <router-link to="/form" class="nav-link w-nav-link" style="max-width: 728px;">FORMS</router-link>
                <router-link to="/analytics" class="nav-link w-nav-link" style="max-width: 728px;">ANALYTICS</router-link>
                <router-link to="/contact" class="nav-link w-nav-link" style="max-width: 728px;">Contact</router-link>
                <router-link to="#" class="close-x w-hidden-main w-hidden-medium w-hidden-small">×</router-link>
            </nav>
        </div>
    </div> 
</template>

<style>
</style>

<script>
export default {};
</script>