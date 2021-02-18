<template>
    <div>
        <v-breadcrumbs :items="breadcumbs">
            <template v-slot:divider>
                <v-icon>mdi-forward</v-icon>
            </template></v-breadcrumbs
        >
        <h1>hola {{ user.username }}</h1>
        ROLES
    </div>
</template>
<script>
import { mapState } from "vuex";
export default {
    name: "Roles",
    data: () => ({
        breadcumbs: [
            {
                text: "Inicio",
                disabled: false,
                href: "home",
            },
            {
                text: "Roles",
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
