import Chip from '@/components/Chip'

const Categories = () => {
	return (
		<>
			<h2 className='text-2xl font-semibold underline text-center text-secondary mb-5'>
				Categories
			</h2>
			<div className='w-max mx-auto mb-8'>
				<div className='flex space-x-4'>
					<Chip text='Samsung' color='#1428A0' />
					<Chip text='Oppo' color='#1EA366' />
					<Chip text='Vivo' color='#2137FC' />
					<Chip text='Xiaomi' color='#FF6900' />
					<Chip text='Apple' color='#000000' />
					<Chip text='OnePlus' color='#F5010C' />
				</div>
			</div>
		</>
	)
}

export default Categories
