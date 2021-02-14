<template>
    <b-container>
        <b-row class="justify-content-md-center">
            <b-col col md="5" lg="5" sm="10">
                <b-alert v-model="error" variant="danger" dismissible>
                    Error al iniciar sesión.
                </b-alert>
                <b-card>
                    <b-form @submit="login">
                        <b-form-group id="login" label="Iniciar sesión">
                            <b-form-input
                                id="username"
                                v-model="form.username"
                                type="text"
                                placeholder="Usuario"
                                required
                            ></b-form-input
                            ><br />
                            <b-form-input
                                id="password"
                                v-model="form.password"
                                type="password"
                                placeholder="Contraseña"
                                required
                            ></b-form-input>
                        </b-form-group>

                        <b-button type="submit" variant="primary"
                            >Entrar</b-button
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
    name: "Login",
    data() {
        return {
            form: {
                username: "",
                password: "",
            },
            error: false,
        };
    },
    methods: {
        ...mapActions(["loginUser", "startLoading", "stopLoading"]),
        login() {
            window.event.preventDefault();
            this.startLoading();
            this.loginUser(this.form)
                .then(() => {
                    location.href = process.env.BASE_URL;
                })
                .catch((e) => {
                    console.log(e);
                    this.error = true;
                })
                .finally(() => this.stopLoading());
        },
    },
};
</script>
