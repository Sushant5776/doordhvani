import Card from '@/components/Card'
import Header from '@/components/Header'
import Image from 'next/image'
import AdvertisementImage from 'public/advertisement.jpg'
import AppleImage from 'public/apple.png'
import AppleImage2 from 'public/apple2.png'
import SamsungImage from 'public/samsung.png'
import HTCImage from 'public/htc.jpg'
import Footer from '@/components/Footer'
import Categories from '@/components/Categories'

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

			<h2 className='text-2xl font-semibold text-center underline text-secondary mb-5'>
				People are Loving These...{' '}
				<span className='text-red-500'>&#x2665;</span>
			</h2>

			<div className='flex mx-16 justify-between mb-20'>
				<Card imgUrl={AppleImage} />
				<Card imgUrl={AppleImage2} />
				<Card imgUrl={SamsungImage} />
				<Card imgUrl={HTCImage} />
			</div>

			<Categories />

			<Footer />
		</main>
	)
}
