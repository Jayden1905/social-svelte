import { auth } from '$lib/utils/firebase'
import type { AuthStateProp, ReadableAuthStateProp } from '$lib/utils/type'
import type { User } from 'firebase/auth'
import { derived, writable, readable, type Readable, type Writable } from 'svelte/store'

type CountProp = Writable<number>

export const count: CountProp = writable(0)

const firstName = writable('John')
const lastName = writable('Doe')

export const fullName = derived(
	[firstName, lastName],
	([$firstName, $lastName]) => `${$firstName} ${$lastName}`
)

type CountStore = Readable<number>

export const readableCount: CountStore = readable(0, (set: (value: number) => void) => {
	let n = 0
	const interval = setInterval(() => {
		n += 1
		set(n)
	}, 1000)

	return () => {
		clearInterval(interval)
	}
})

export const authState: ReadableAuthStateProp = readable(
	null,
	(set: (value: AuthStateProp) => void) => {
		set({ loading: true, user: null, error: null })
		const unsubscribe = auth.onAuthStateChanged(
			(user: User | null) => {
				set({ loading: false, user, error: null })
			},
			(error: Error) => {
				set({ loading: false, user: null, error })
			}
		)

		return unsubscribe
	}
)
