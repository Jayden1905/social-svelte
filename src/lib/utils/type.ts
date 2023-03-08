import type { User } from 'firebase/auth'
import type { Readable } from 'svelte/store'

export type AuthStateProp = {
	loading: boolean
	user: User | null
	error: Error | null
}

export type ReadableAuthStateProp = Readable<AuthStateProp | null>
