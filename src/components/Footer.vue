<template>
    <v-footer class="d-flex justify-center" height="70" id="footerPage" color="#0F1F46">
        <v-div v-for="(socialLink, index) in socialLinks" :key="index">
            <a :href="socialLink.link" target="_blank">
                <img id="socialIcon" class="d-flex mx-3" width="30" :src="socialLink.icon">
            </a>
        </v-div>
    </v-footer>
</template>

<script>
import api from '@/services/api.js'

export default {
    name: 'Footer',
    data() {
        return {
            socialLinks: []
        }
    },
    mounted() {
        api.get('/social-links.json').then(response => {
            this.socialLinks = response.data;
        })
    }
}
</script>

<style scoped>

</style>