<template>
    <div>
        <v-overlay v-if="loading">
            <loading
                :active="loading"
                :loader="'dots'"
                :height="100"
                :width="100"
                :color="'primary'"
                lock-scroll
            ></loading>
        </v-overlay>
        <v-app>
            <Header v-if="user" :user="user" />
            <Sidebar v-if="user" :user="user" />
            <v-main>
                <v-container fluid>
                    <router-view></router-view>
                </v-container>
            </v-main>
        </v-app>
    </div>
</template>

<script>
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import Header from "./components/Header.vue";
import Sidebar from "./components/Sidebar.vue";
import { mapState } from "vuex";
export default {
    name: "App",
    components: { Sidebar,Header, Loading },
    computed: {
        ...mapState({
            user: (state) => state.user.user,
            loading: (state) => state.loading,
        }),
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
