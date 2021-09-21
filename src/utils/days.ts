export enum Days {
	Sunday,
	Monday,
	Tuesday,
	Wednesday,
	Thursday,
	Friday,
	Saturday
}

export function getToday<T>(type: T, day: number): T[keyof T] {
	const casted = day as keyof T
	return type[casted]
}
