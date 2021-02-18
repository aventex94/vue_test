<template>
    <v-app-bar app clipped-left>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-spacer></v-spacer>
        <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">                
                <v-avatar color="indigo">
                    <v-btn icon v-bind="attrs" v-on="on">
                        <v-icon color="white">mdi-account-circle</v-icon>
                    </v-btn></v-avatar
                >
            </template>
            <v-list>
                <v-list-item :to="{ name: 'Perfil' }">
                    <v-list-item-title> Perfil </v-list-item-title>
                </v-list-item>
                <v-list-item @click="logout">
                    <v-list-item-title> Cerrar sesión </v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
    </v-app-bar>
</template>

<script>
export default {
    name: "Header",
    props: ["user"],
    methods: {
        async logout() {
            await this.$store.dispatch("logout");
            location.href = process.env.BASE_URL;
        },
    },
};
</script>

<style>
</style>