<template>
    <div>
        <Header />
        <div class="vld-parent">
            <loading
                v-if="loading"
                :active="loading"
                :loader="'dots'"
                :height="100"
                :width="100"
                :color="'primary'"
                lock-scroll
            ></loading>
        </div>

        <router-view></router-view>
    </div>
</template>

<script>
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import Header from "./components/Header.vue";
import { mapState } from "vuex";
export default {
    name: "App",
    components: { Header, Loading },
    computed: mapState(["loading"]),
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
