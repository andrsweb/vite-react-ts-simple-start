import './Link.scss'

interface LinkProps {
	href: string
	text: string
	newTab?: boolean
}

const Link: React.FC<LinkProps> = ({ href, text, newTab = false }) => {
	return (
		<a
			className="link"
			href={href}
			target={newTab ? '_blank' : '_self'}
			rel={newTab ? 'noopener noreferrer' : undefined}
		>
			{text}
		</a>
	)
}

export default Link