<template>
    <div>
        <h1>hola</h1>
    </div>
</template>
<script>
export default {
    name: "Home",
    mounted() {
        console.log(this.$store.getters.user);
        this.updateUser({ dni: 38454851, nombre: "Juancin", token:"5555ssss5555"});
        console.log(this.$store.getters.user);
    },
    methods: {
        updateUser(data) {
            this.$store.commit("user", data);
        },
    },
};
</script>
