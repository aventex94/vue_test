<template>
    <div>PROFILE</div>
</template>

<script>
import { mapActions } from "vuex";
export default {
    name: "Profile",
    data() {
        return {
            form: {
                username: "",
                nombre: "",
                apellido: "",
            },
            error: false,
            success: false,
        };
    },
    mounted() {
        this.form = this.$store.getters.user;
    },
    methods: {
        ...mapActions(["updateProfile", "startLoading", "stopLoading"]),
        update() {
            window.event.preventDefault();
            this.startLoading();
            this.updateProfile(this.form)
                .then(() => {
                    this.success = true;
                })
                .catch(() => {
                    this.error = true;
                })
                .finally(() => this.stopLoading());
        },
    },
};
</script>

<style>
</style>