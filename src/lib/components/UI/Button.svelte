<script lang="ts">
	import type { Snippet } from 'svelte';

	interface BasicProps {
		children: Snippet;
		isSecondary?: boolean;
		isDanger?: boolean;
		isMenu?: boolean;
	}
	interface LinkProps extends BasicProps {
		href: string;
		onclick?: never;
	}
	interface ButtonProps extends BasicProps {
		onclick: (e: MouseEvent) => void;
		href?: never;
	}
	type Props = ButtonProps | LinkProps;
	const { children, href, isSecondary, isDanger, isMenu, ...props }: Props = $props();
</script>

{#if href}
	<a
		{href}
		class="btn"
		class:btn-secondary={isSecondary}
		class:btn-danger={isDanger}
		class:btn-menu={isMenu}>{@render children()}</a
	>
{:else}
	<button
		{...props}
		class="btn"
		class:btn-secondary={isSecondary}
		class:btn-danger={isDanger}
		class:btn-menu={isMenu}>{@render children()}</button
	>
{/if}

<style>
	a {
		display: inline-block;
		&,
		&:hover {
			text-decoration: none;
		}
	}
	.btn {
		padding: 8px 16px;
		min-width: 14rem;
		text-align: center;
		background: var(--inverted-back);
		color: var(--inverted-fore);
		border: 1px solid;
		border-color: var(--inverted-fore);
		border-radius: 12px;
		font-size: 1.25rem;
	}
	.btn-secondary {
		background: var(--inverted-fore);
		color: var(--inverted-back);
		border-color: var(--inverted-back);
	}
	.btn-danger {
		background-color: var(--danger);
	}
	.btn-menu {
		min-width: 7.5rem;
		padding: 6px 12px;
	}
	@media screen and (min-width: 40rem) {
		.btn {
			padding: 12px 24px;
		}
		.btn-menu {
			padding: 8px 20px;
		}
	}
</style>
