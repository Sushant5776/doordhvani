import Categories from '@/components/Categories'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ProductCard from '@/components/ProductCard'

const ExplorePage = () => {
	return (
		<main>
			<Header />
			<Categories />
			{/* cards */}
			<article className='px-16 w-full h-max mb-10 grid grid-cols-4 gap-14'>
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
			</article>
			<Footer />
		</main>
	)
}

export default ExplorePage
