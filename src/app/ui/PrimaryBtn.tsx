export default function PrimaryBtn({ title }: { title: string }) {
	return (
		<button
			className="primary-gradient px-4 py-2 font-semibold text-white rounded-lg text-sm h-10 hover:cursor-not-allowed hover:opacity-75"
			disabled
		>
			{title}
		</button>
	)
}
