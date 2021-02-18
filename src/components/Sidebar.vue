<template>
    <v-navigation-drawer app clipped>
        <v-card height="100%">
            <v-navigation-drawer>
                <v-list>
                    <v-list-item>
                        <v-list-item-avatar>
                            <v-img
                                src="https://cdn.vuetifyjs.com/images/john.png"
                            ></v-img>
                        </v-list-item-avatar>
                    </v-list-item>

                    <v-list-item link>
                        <v-list-item-content>
                            <v-list-item-title class="title">
                                {{ user.firstName }} {{ user.lastName }}
                            </v-list-item-title>
                            <v-list-item-subtitle>{{
                                user.username
                            }}</v-list-item-subtitle>
                        </v-list-item-content>

                        <v-list-item-action>
                            <v-icon>mdi-menu-down</v-icon>
                        </v-list-item-action>
                    </v-list-item>
                </v-list>
                <v-divider></v-divider>

                <v-list nav dense>
                    <v-list-item-group color="primary">
                        <v-list-item :to="{ name: 'Home' }">
                            <v-list-item-icon>
                                <v-icon v-text="'mdi-home'"></v-icon>
                            </v-list-item-icon>

                            <v-list-item-content>
                                <v-list-item-title
                                    v-text="'Inicio'"
                                ></v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list-item-group>
                    <v-divider></v-divider>
                    <v-list-item-group color="primary">
                        <v-list-item
                            v-for="(item, i) in items"
                            :key="i"
                            :to="item.to"
                        >
                            <v-list-item-icon>
                                <v-icon v-text="item.icon"></v-icon>
                            </v-list-item-icon>

                            <v-list-item-content>
                                <v-list-item-title
                                    v-text="item.text"
                                ></v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-navigation-drawer>
        </v-card>
    </v-navigation-drawer>
</template>

<script>
export default {
    name: "Sidebar",
    props: ["user"],
    data: () => ({
        items: [
            {
                text: "Usuarios",
                icon: "mdi-account-multiple",
                to: { name: "Users" },
            },
            { text: "Roles", icon: "mdi-account", to: { name: "Roles" } },
            { text: "Acciones", icon: "mdi-account", to: { name: "Actions" } },
        ],
    }),
};
</script>

<style>
</style>