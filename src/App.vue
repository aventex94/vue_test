<template>
    <div id="app">
        <span v-if="isLoggedIn">
            <a @click="logout" href="">Logout</a>
        </span>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "App",
    computed: {
        isLoggedIn: function () {
            return this.$store.getters.isAuth;
        },
    },
    methods: {
        async logout() {
            await this.$store.dispatch("logout");
            location.href = process.env.BASE_URL;
        },
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
