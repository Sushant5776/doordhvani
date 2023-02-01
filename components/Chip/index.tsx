import Link from 'next/link'

type Props = {
	text: string
	color: string
}

const Chip = ({ text, color }: Props) => {
	return (
		<Link
			href={`/explore/${text.toLowerCase()}`}
			style={{ backgroundColor: color }}
			className={`px-4 py-2 rounded-full text-base font-medium text-white w-fit`}>
			{text}
		</Link>
	)
}

export default Chip
