import Link from 'next/link'

type Props = {
	value: string
	url: string
	type: 'tertiary' | 'secondary'
}

const ButtonLink = ({ value, url, type }: Props) => {
	return (
		<Link
			className={`font-medium text-white py-2 px-4 rounded-lg ${
				type === 'secondary' ? 'bg-secondary' : 'bg-tertiary'
			}`}
			href={url}>
			{value}
		</Link>
	)
}

export default ButtonLink
