import { PUBLIC_SUPABASE_ANON, PUBLIC_SUPABASE_URL } from '$env/static/public';
import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { createClient } from '@supabase/supabase-js';

interface ReturnObject {
	success: boolean;
	errors?: string[];
	message?: string;
}

export const actions: Actions = {
	default: async ({ request }) => {
		// going to do something with the given event
		const formData = await request.formData();
		const name = formData.get('name') as string;
		const email = formData.get('email') as string;
		const password = formData.get('password') as string;
		const passwordConfirmation = formData.get('passwordConfirmation') as string;

		const returnObject: ReturnObject = {
			success: false,
			errors: []
		};

		if (name.length < 2) {
			console.log('Name is too short, it must be at least 2 characters long');
			returnObject?.errors?.push('Then name is too short. Must be at least 2 characters long');
		}
		if (!email) {
			returnObject?.errors?.push('Email is required.');
		}
		if (!password) {
			returnObject?.errors?.push('Password is required.');
		}

		if (passwordConfirmation !== password) {
			returnObject?.errors?.push('Passwords do not match.');
		}

		if (returnObject?.errors?.length) {
			return returnObject;
		}

		// Registration flow
		const supabase = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON);

		const { data, error } = await supabase.auth.signUp({
			email,
			password
		});
		if (error || !data.user) {
			console.error('There has been an error', error);
			return fail(400, {
				success: false,
				errors: [error?.message]
			});
		}
		redirect(303, '/private/dashboard');
	}
};
