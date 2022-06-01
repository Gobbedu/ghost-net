<template>
    <div class="main-section dark wf-section">
        <div class="footer-section">
            <div class="w-container">
                <div class="w-row">
                    <div class="w-col w-col-4 w-col-small-4">
                        <a href="/" aria-current="page" class="footer-logo w-inline-block w--current">
                            <div class="long-text">Sample.</div>
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
export default {};
</script>