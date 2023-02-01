import Header from '@/components/Header'
import Image from 'next/image'
import AdvertisementImage from 'public/advertisement.jpg'

export default function Home() {
	return (
		<main className='w-full'>
			{/* <h1>
				Hare Krishna Hare Krishna Krishna Krishna Hare Hare Hare Ram Hare Ram
				Ram Ram Hare Hare
			</h1> */}
			<Header />

			<div className='w-full h-[480px] px-16 my-6'>
				<div className='relative w-full h-[480px]'>
					<Image
						className='object-cover rounded-[20px]'
						fill
						src={AdvertisementImage}
						alt='Advertisement'
					/>
				</div>
			</div>

			<h2 className='text-2xl font-semibold text-center text-secondary'>
				People are Loving These...{' '}
				<span className='text-red-500'>&#x2665;</span>
			</h2>
		</main>
	)
}
