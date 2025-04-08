<script lang="ts">
	import { Button } from '$components';
	import type { ActionData } from '../../../routes/register/$types';

	interface Props {
		isRegistration?: boolean;
		form: ActionData;
	}
	const { isRegistration, form }: Props = $props();
</script>

<div class="default-margin auth-container">
	<h1 class="mb-l">{isRegistration ? 'Register' : 'Login'}</h1>
	<div class="form-and-social-login">
		<form class="auth-form" method="POST">
			{#if form?.errors?.length}
				{#each form.errors as error}
					<p class="auth-error">{error}</p>
				{/each}
			{/if}
			{#if isRegistration}
				<input type="text" placeholder="Name" name="name" />
			{/if}
			<input type="text" placeholder="Email" name="email" />
			<input type="password" placeholder="Password" name="password" />
			{#if isRegistration}
				<input type="password" placeholder="Confirm password" name="passwordConfirmation" />
			{/if}
			<Button type="submit">{isRegistration ? 'Register' : 'Login'}</Button>
			<p class="auth-hint mt-s">
				{#if isRegistration}
					Alread have an account? <a href="/login">Login</a>
				{:else}
					Do not have an account yet? <a href="/register">Register</a>
				{/if}
			</p>
		</form>
		<div class="social-login">social</div>
	</div>
</div>

<style>
	.auth-container {
		margin-top: 40px;
	}
	.auth-form {
		display: flex;
		flex-direction: column;
		align-items: start;
		width: 100%;

		input {
			width: 100%;
			margin-bottom: 12px;
			&:last-of-type {
				margin-bottom: 30px;
			}
		}
		.auth-hint {
			font-size: 1rem;
			color: gray;
		}
		.auth-error {
			background-color: var(--error);
			color: white;
			font-size: 1.1rem;
			border-radius: 12px;
			padding: 12px;
			width: 100%;
			margin-bottom: 8px;
			&:last-of-type {
				margin-bottom: 16px;
			}
		}
	}

	@media screen and (min-width: 40rem) {
		.form-and-social-login {
			display: flex;
		}
		.auth-form {
			border-right: 1px solid gray;
			padding-right: 40px;
			width: 60%;

			input {
				width: 100%;
				margin-bottom: 12px;
			}
		}
		.social-login {
			padding-left: 40px;
			width: 40%;
		}
	}

	@media screen and (min-width: 80rem) {
		.auth-container {
			margin-top: 80px;
		}

		.auth-form {
			padding-right: 80px;
		}
		.social-login {
			padding-left: 80px;
		}
	}
	@media screen and (min-width: 100rem) {
		.auth-form {
			width: 40%;
		}
	}
</style>
