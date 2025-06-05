<template>
	<div class="flex justify-between justify-self-center max-w-[1920px] items-center w-full z-10">
		<img src="/img/logo.svg" alt="logo">

		<div class="flex items-center gap-8 color-neutral">
			<NuxtLink
				to="/"
				class="cursor-pointer hover:text-violet-500 h-[44px] w-[100px] flex flex-col justify-center items-center"
				:class="activeNavItem === 'home' ? 'active-nav-item' : ''"
			>
				<span>Home</span>

				<div
					v-if="activeNavItem === 'home'"
					class="w-1/3 h-[3px] bg-violet-500 border-radius-full"
				/>
			</NuxtLink>

			<NuxtLink
				to="/portfolio"
				class="cursor-pointer hover:text-violet-500 h-[44px] w-[100px] flex flex-col justify-center items-center"
				:class="activeNavItem === 'portfolio' ? 'active-nav-item' : ''"
			>
				<span>Portfolio</span>

				<div
					v-if="activeNavItem === 'portfolio'"
					class="w-1/3 h-[3px] bg-violet-500"
				/>
			</NuxtLink>

			<!-- <NuxtLink
				to="/socials"
				class="cursor-pointer hover:text-violet-500 h-[44px] w-[100px] flex flex-col justify-center items-center"
				:class="activeNavItem === 'socials' ? 'active-nav-item' : ''"
			>
				<span>Socials</span>

				<div
					v-if="activeNavItem === 'socials'"
					class="w-1/3 h-[3px] bg-violet-500"
				/>
			</NuxtLink> -->
		</div>

		<button
			class="button-primary hover:shadow-lg hover:shadow-violet-200"
			@click="openWhatsapp"
		>
			Contact me
		</button>
	</div>
</template>

<script setup>

defineProps({
	activeNavItem: {
		type: String,
		default: 'home'
	}
});

function openWhatsapp() {
	window.open('https://api.whatsapp.com/send?phone=5574988124897', '_blank');
}

</script>

<style lang="css" scoped>

.active-nav-item {
	color: #8B5CF6;
}

.button-primary {
	background-color: #8B5CF6;
	color: #fff;
	border: none;
	padding: 10px 20px;
	border-radius: 20px;
	font-size: 16px;
	cursor: pointer;
	transition: background-color 0.3s ease;
}

.button-primary:hover {
	background-color: #733BF3;
}

</style>