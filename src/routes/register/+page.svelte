<script lang="ts">
	import { AuthForm } from '$components';

	const { form } = $props();
	// $inspect(form);
</script>

<AuthForm isRegistration {form} />
