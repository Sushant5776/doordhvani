type Props = {
	text: string
	color: string
}

const Chip = ({ text, color }: Props) => {
	return (
		<div
			style={{ backgroundColor: color }}
			className={`px-4 py-2 rounded-full text-base font-medium text-white w-fit`}>
			{text}
		</div>
	)
}

export default Chip
