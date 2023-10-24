<template>
    <div id="homePrincipal" class="w-100 d-flex align-center justify-center">
        <div class="d-flex flex-column text-center">
            <p class="text-white text-h6 font-weight-light">Vídeos novos toda <span class="font-weight-bold">quinta</span>
                às <span class="font-weight-bold">20h</span></p>
            <a href="https://www.youtube.com/@wdevoficial" target="_blank">
                <img id="botaoInscrevase" class="mx-auto my-4" width="300"
                    src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/subscribe.svg"
                    alt="">
            </a>
            <h4 class="mt-n1 text-white font-weight-light">youtube.com/wdevoficial</h4>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home'
}
</script>

<style scoped>
#homePrincipal {
    background-color: #1a304d;
    height: calc(100vh - 110px);
}

@media(min-width: 1366px) {
    #botaoInscrevase {
        width: 450px;
    }
}
</style>