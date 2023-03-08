import { redirect } from '@sveltejs/kit'
import { authState } from '../../../store'

export const ssr = true

export function load() {
	if (authState.subscribe((value) => !value?.user)) throw redirect(307, '/')
}
