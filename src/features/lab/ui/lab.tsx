import { BoardItem } from '../lib/generateData'

const Lab = ({ item }: { item: BoardItem }) => {
	return (
		<div className='w-20 h-20 rounded-full bg-secondary text-main text-lg flex justify-center items-center shadow-default active:shadow-active cursor-pointer transition-shadow'>
			{item.title}
		</div>
	)
}

export default Lab
