import { auth } from '$lib/utils/firebase'
import { redirect } from '@sveltejs/kit'

export const ssr = true

export function load() {
	if (auth.currentUser) throw redirect(307, '/')
}
