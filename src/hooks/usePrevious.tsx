import { useEffect, useRef } from 'react'
// gets previous value of a props or state before update

export default function usePrevious(value: any) {
	const ref = useRef()
	useEffect(() => {
		ref.current = value
	})
	return ref.current
}
