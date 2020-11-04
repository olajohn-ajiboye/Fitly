export function isNullOrUndefined(...args: Array<any>) {
	return args.some((value) => value === null || value === undefined)
}
