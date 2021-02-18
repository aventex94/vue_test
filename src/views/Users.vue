<template>
    <div>
        <v-breadcrumbs :items="breadcumbs">
            <template v-slot:divider>
                <v-icon>mdi-forward</v-icon>
            </template></v-breadcrumbs
        >
        <h1>hola {{ user.username }}</h1>
        Users
    </div>
</template>
<script>
import { mapState } from "vuex";
export default {
    name: "Users",
    data: () => ({
        breadcumbs: [
            {
                text: "Inicio",
                disabled: false,
                href: "home",
            },
            {
                text: "Usuarios",
                disabled: true,
                href: "",
            },
        ],
    }),
    computed: {
        ...mapState({
            user: (state) => state.user.user,
        }),
    },
};
</script>
