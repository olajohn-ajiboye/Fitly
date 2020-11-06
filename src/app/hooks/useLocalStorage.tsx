import { FirebaseUser } from '../../services/firestore'
export function useLocalStorage<T = FirebaseUser>(key: string, value?: any) {
	const item = localStorage.getItem(key) as any

	const getItem = () => JSON.parse(item) as T
	const setItem = () => localStorage.setItem(key, JSON.stringify(value))
	const removeItem = () => localStorage.removeItem(key)

	return {
		getItem,
		setItem,
		removeItem,
	}
}
