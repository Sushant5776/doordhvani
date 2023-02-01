import Link from 'next/link'
import ButtonLink from '@/components/ButtonLink'

const Header = () => {
	return (
		<header className='flex justify-between items-center pt-10'>
			<h1 className='text-3xl font-bold ml-16 text-transparent bg-gradient-to-r from-secondary to-tertiary bg-clip-text'>
				<Link href={'/'}>Doordhvani</Link>
			</h1>
			<div className='flex items-center mr-16 space-x-4'>
				<Link
					className='text-secondary underline font-medium'
					href={'/explore'}>
					Explore
				</Link>

				<div className='w-[3px] h-14 rounded-full bg-gray-400 opacity-60'></div>

				<div className='space-x-4'>
					<ButtonLink value='Sign Up' type='secondary' url='/sign_up' />
					<ButtonLink value='Sign In' type='tertiary' url='/sign_in' />
				</div>
			</div>
		</header>
	)
}

export default Header
