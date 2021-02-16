<template>
    <div>
        <h1>hola {{ user.username }}</h1>
    </div>
</template>
<script>
import { mapState } from "vuex";
export default {
    name: "Home",
    mounted() {},
    methods: {},
    computed: {
        ...mapState({
            user: (state) => state.user.user,
        }),
    },
};
</script>
