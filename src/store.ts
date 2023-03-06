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
