<template>
    <v-app-bar flat height="40" class="pa-3 d-flex justify-space-between" color="#0F1F46">
        <template v-slot:prepend>
            <a href="/">
                <v-img id="logo" width="130"
                    src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/wdev.svg"></v-img>
            </a>
        </template>

        <!-- MENU PC  -->
        <template v-slot:append>
            <v-btn class="d-flex d-md-none" @click="isDrawerOpen = !isDrawerOpen">
                <v-img id="menu-button" width="30"
                    src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/menu.svg"></v-img>
            </v-btn>
            <v-list id="menuPC" class="d-none d-md-flex">
                <v-list-item v-for="(item, index) in items" :key="index"><a class="text-white" :href="item.link">{{
                    item.name
                }}</a></v-list-item>
            </v-list>
        </template>
    </v-app-bar>

    <!-- MENU HAMBURGUER -->
    <v-navigation-drawer color="#153D61" class="w-50 d-flex d-md-none" location="right" v-model="isDrawerOpen">
        <v-list class="text-center">
            <v-list-item class="mt-5"><v-img class="mx-auto" width="100"
                    src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/wdev.svg"></v-img></v-list-item>
            <v-list-item v-for="(item, index) in items" :key="index"><a class="text-white" :href="item.link">{{ item.name
            }}</a></v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>
  
<script>
export default {
    name: 'Header',
    data() {
        return {
            isDrawerOpen: false,
            items: [
                { name: 'Home', link: '/' },
                { name: 'Vídeo', link: '/videos' },
                { name: 'Sobre', link: 'sobre' },
                { name: 'Contato', link: '/contato' }
            ]
        }
    }
}
</script>
  
<style scoped>
a {
    text-decoration: none;
}

#menuPC {
    background-color: #0F1F46;
}
</style>
  