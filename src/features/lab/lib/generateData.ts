export type BoardItem = {
	id: number
	title: string
	bomb: boolean
}

export type BoardData = {
	id: number
	modifier: number
	items: BoardItem[]
}

export const generateData = () => {
	const data: BoardData[] = []

	for (let i = 1; i <= 5; i++) {
		const lineArr = []

		for (let j = 0; j < 5; j++) {
			const item = { id: j, title: `x${i}`, bomb: j > 3 ? true : false }
			lineArr.push(item)
		}
		const line = { id: i, modifier: i, items: lineArr }
		data.push(line)
	}
	return data
}
