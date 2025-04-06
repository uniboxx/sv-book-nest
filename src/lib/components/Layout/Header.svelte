<script lang="ts">
	import bookNestLogo from '$assets/app-logo.svg';
	import { Button } from '$components';
</script>

<header>
	<a href="/"><img src={bookNestLogo} alt="Go to homepage" class="logo" /></a>
	<nav>
		<menu>
			<li>
				<Button isMenu href="/register">Create account</Button>
			</li>
			<li>
				<Button isMenu isSecondary href="/login">Login</Button>
			</li>
		</menu>
	</nav>
</header>

<style>
	header {
		padding: 12px 4vw;
	}
	menu {
		display: flex;
		flex-wrap: wrap;
		justify-content: end;
		gap: 1.2rem;
	}
	.logo {
		height: 4rem;
		@media (prefers-color-scheme: dark) {
			filter: invert(1);
		}
	}
	@media screen and (min-width: 40rem) {
		header {
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
		.logo {
			height: 4.5rem;
		}
	}
</style>
