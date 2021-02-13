<template>
	<div>
		<h1>User</h1>
	</div>
</template>
<script>
	export default {
		name: "User",
		mounted() {
			console.log(this.$store.getters.user);
			this.$store.dispatch("getUser");
		},
	};
</script>
