<template>
	<v-app>
		<Navigation>
			<!-- -->
		</Navigation>

		<Bar>
			<!-- -->
		</Bar>

		<!-- Sizes your content based upon application components -->
		<v-main>
			<!-- Provides the application the proper gutter -->
			<v-container fluid>
				<!-- If using vue-router -->
				<router-view></router-view>
			</v-container>
		</v-main>

		<Footer></Footer>
	</v-app>
</template>
<script>
	import Bar from "./modules/Bar.vue";
	import Navigation from "./modules/Navigation.vue";
	import Footer from "./modules/Footer.vue";

	export default {
		components: {
			Bar,
			Navigation,
			Footer,
		},
	};
</script>
