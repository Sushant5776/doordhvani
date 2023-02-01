import Image, { StaticImageData } from 'next/image'

type Props = {
	imgUrl: StaticImageData
}

const Card = ({ imgUrl }: Props) => {
	return (
		<div className='relative w-72 h-72 bg-white rounded-2xl shadow-lg shadow-gray-300'>
			<Image
				className='object-cover rounded-2xl'
				fill
				src={imgUrl}
				alt='phone card'
			/>
		</div>
	)
}

export default Card
