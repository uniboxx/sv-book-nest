<script lang="ts">
	import { Button } from '$components';
	import heroImage from '$assets/hero.webp';
</script>

<section class="default-margin hero">
	<div class="hero-text">
		<h1>Book Nest</h1>
		<h3>Your personal book library</h3>
		<h4 class="mt-l">
			Create your very own library where you can keep track of every book you own, read and love.
		</h4>
		<h4 class="mb-s">
			Our app offers a beautifully designed, easy-to-use interface that makes managing your book
			collection a joy.
		</h4>
		<Button href="/register">Sign up</Button>
	</div>
	<img src={heroImage} class="hero-image" alt="" />
</section>

<style>
	.hero {
		margin-top: 40px;
		margin-bottom: 32px;
	}
	.hero-image {
		width: 100%;
		margin-top: 16px;
	}
	@media screen and (min-width: 40rem) {
		.hero {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-top: 60px;
			margin-bottom: 48px;
		}
		.hero-text {
			width: 52.5%;
		}
		.hero-image {
			width: 40%;
			margin-top: unset;
		}
	}
	@media screen and (min-width: 80rem) {
		.hero {
			margin-top: 100px;
			margin-bottom: 80px;
		}
	}
</style>
