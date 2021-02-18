<template>
    <v-layout align-content-center justify-center mt-6 v-if="!user">
        <v-row
            ><v-col
                :md="4"
                :lg="4"
                :offset-md="4"
                :offset-lg="4"
                :sm="12"
                :xs="12"
                :align="'center'"
            >
                <v-card class="py-6 px-10">
                    <v-icon class="mx-auto" color="indigo" size="50"
                        >mdi-account-circle</v-icon
                    >
                    <v-card-title class="mx-auto">
                        <span class="mx-auto"> Iniciar sesión</span>
                    </v-card-title>
                    <form @submit="login">
                        <v-text-field
                            v-model="form.username"
                            :error-messages="usernameErrors"
                            label="Nombre de usuario"
                            @input="$v.form.username.$touch()"
                            @blur="$v.form.username.$touch()"
                            outlined
                        ></v-text-field>
                        <v-text-field
                            v-model="form.password"
                            :error-messages="passwordErrors"
                            label="Contraseña"
                            type="password"
                            @input="$v.form.password.$touch()"
                            @blur="$v.form.password.$touch()"
                            outlined
                        ></v-text-field>
                        <v-card-actions>
                            <v-spacer></v-spacer>

                            <v-btn type="submit"> Entrar </v-btn>
                        </v-card-actions>
                    </form></v-card
                ><v-alert border="bottom" color="red" dark v-if="hasErrorLogin">
                    {{ errorLogin }}
                </v-alert></v-col
            ></v-row
        >
    </v-layout>
</template>
<script>
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";
import { mapActions, mapState } from "vuex";
export default {
    name: "Login",
    mixins: [validationMixin],

    validations: {
        form: {
            username: { required },
            password: { required },
        },
    },
    data() {
        return {
            form: {
                username: "",
                password: "",
            },

            errorLogin: "",
        };
    },
    methods: {
        ...mapActions(["loginUser", "startLoading", "stopLoading"]),
        login() {
            window.event.preventDefault();
            this.errorLogin = "";
            this.$v.$touch();
            if (!this.$v.$invalid) {
                this.startLoading();
                this.loginUser(this.form)
                    .then(() => {
                        window.location.href = process.env.BASE_URL;
                    })
                    .catch((e) => {
                        console.log(e);
                        this.errorLogin = e.response.data.mensaje;
                    })
                    .finally(() => this.stopLoading());
            }
        },
    },
    computed: {
        ...mapState({
            user: (state) => state.user.user,
        }),
        hasError() {
            return this.error != "";
        },
        usernameErrors() {
            const errors = [];
            if (!this.$v.form.username.$dirty) return errors;
            !this.$v.form.username.required &&
                errors.push("Ingrese nombre de usuario");
            return errors;
        },
        passwordErrors() {
            const errors = [];
            if (!this.$v.form.password.$dirty) return errors;
            !this.$v.form.password.required &&
                errors.push("Ingrese una contraseña");
            return errors;
        },
        hasErrorLogin() {
            return this.errorLogin != "";
        },
    },
};
</script>
