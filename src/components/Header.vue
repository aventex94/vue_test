<template>
    <div id="header">
        <b-navbar toggleable="lg" type="dark" variant="primary">
            <b-navbar-brand :to="{ name: 'Home' }">Home</b-navbar-brand>
            <b-navbar-toggle
                target="nav-collapse"
                v-if="user"
            ></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto" v-if="user">
                    <b-nav-item-dropdown right>
                        <!-- Using 'button-content' slot -->

                        <template #button-content>
                            <b-icon-person> </b-icon-person>
                            {{ user.username }}
                        </template>
                        <b-dropdown-item :to="{ name: 'Profile' }"
                            >Profile</b-dropdown-item
                        >
                        <b-dropdown-item href="" @click="logout"
                            >Cerrar sesión</b-dropdown-item
                        >
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    name: "Header",
    computed: {
        ...mapState({
            user: (state) => state.auth.user,
        }),
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
#header {
    margin-bottom: 3rem;
}
b-dropdown-item {
    text-decoration: none;
}
</style>