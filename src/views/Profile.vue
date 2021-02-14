<template>
    <b-container>
        <b-row class="justify-content-md-center">
            <b-col col md="5" lg="5" sm="10">
                <b-alert v-model="error" variant="danger" dismissible>
                    Error al actualizar datos.
                </b-alert>
                <b-alert v-model="success" variant="success" dismissible>
                    Datos modificados correctamente
                </b-alert>
                <b-card>
                    <b-form @submit="update">
                        <b-form-group id="mis-datos">
                            <label for="username">Username:</label>
                            <b-form-input
                                id="username"
                                v-model="form.username"
                                type="text"
                                placeholder="Usuario"
                                required
                            ></b-form-input
                            ><br />
                            <label for="nombre">Nombre:</label>
                            <b-form-input
                                id="nombre"
                                v-model="form.nombre"
                                type="text"
                                placeholder="NOmbre"
                                required
                            ></b-form-input
                            ><br />
                            <label for="apellido">Apellido:</label>
                            <b-form-input
                                id="apellido"
                                v-model="form.apellido"
                                type="text"
                                placeholder="Apellido"
                                required
                            ></b-form-input
                            ><br />
                        </b-form-group>

                        <b-button type="submit" variant="primary"
                            >Guardar</b-button
                        >
                    </b-form>
                </b-card></b-col
            ></b-row
        >
    </b-container>
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
        ...mapActions(["updateUser"]),
        update() {
            window.event.preventDefault();
            this.updateUser(this.form)
                .then(() => {
                    this.success = true;
                })
                .catch(() => {
                    this.error = true;
                });
        },
    },
};
</script>

<style>
</style>